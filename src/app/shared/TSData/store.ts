import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';
import { ProjectApiConfig } from './project-api-config';
import { AuthService } from './auth.service';
import { Cache } from './cache';
// The store will help us out with http, and our relations.
// Storing our relation on a record by record basis would be a nightmare, since
// we would have to somehow persist the relation everytime it is being created

interface ListResponse {
  results: Array<any>;
  count: number;
  previous: string;
  next: string;
}

@Injectable()
export abstract class Store<T> {

  // Now that we have a setter function, we can easily configure our endpoint,
  // so that we don't have to continuosly concat the string
  set endpoint(value: string) {
    this.restUrl = this.restUrl = `${this.apiConfig.baseUrl}/${value}`;
  };

  private restUrl: string;

  // we will just override this later in our model's class
  abstract recordClass;
  public cache: Cache = new Cache();

  private apiConfig: ProjectApiConfig = new ProjectApiConfig();
  constructor(private http: HttpService) {
                this.restUrl = `${this.apiConfig.baseUrl}/${this.endpoint}`;
              }

  public create(payload): Observable<any> {
    return this.http.post(this.restUrl, payload)
      .map(newItem => {
        new this.recordClass(newItem);
      });
  }

  // TODO: update the store, and then call load relations, so that all relations
  // stay up to date
  public update(id: number|string, body: any, patch: boolean = true): Observable<any> {
    const method = patch ? 'patch' : 'put';
    return this.http.update(`${this.restUrl}/${id}/`, body);
  }

  public destroy(id: number|string) {}

  public readList(params = {}, forced = true): Observable<any> {
    if (forced || !this.cache.isValid()) {
      return this.http.get(this.restUrl, params)
        .map((items: any[]) => {
          console.log(items);
          const results = items.map(item => new this.recordClass(item));
          this.cache.validate()
          this.cache.refresh(results);
          return results;
        });
    } else {
      return this.cache.getAll(params);
    }
  }

  public readListPaged(params = {}) {
    return this.http.get(this.restUrl, params)
      .flatMap((firstPageResponse: ListResponse) => {
        const requestList = [Observable.of(firstPageResponse.results)];
        if (firstPageResponse.next) {
          for (let i = 2; i <= Math.ceil(firstPageResponse.count / firstPageResponse.results.length); i++) {
            requestList.push(this.readList({page: i}));
          }
        }
        return Observable.forkJoin(requestList);
      });
  }

  public read(id: string|number, forced: boolean = false) {
    if (this.cache.objExists((id as number)) && !forced) {
      return this.cache.getObj((id as number));
    }
    return this.http.get(`${this.restUrl}/${id}`)
      .map(response => new this.recordClass(response));
  }

  public loadRelation(id: number) {

  }
}
