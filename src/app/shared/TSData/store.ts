import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';
import { ProjectApiConfig } from './project-api-config';
import { Relations } from './relations';
import { AuthService } from './auth.service';
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
  private _items: ReplaySubject<Array<any>> = new ReplaySubject(1);
  public get items() {
    return this._items.flatMap(subject => {
      return Observable.create(stream => {
        stream.next(subject);
        stream.complete();
    })});
  }
  // we will just override this later in our model's class
  abstract recordClass;
  abstract relations: Relations;


  private apiConfig: ProjectApiConfig = new ProjectApiConfig();
  constructor(private http: HttpService,
              private auth: AuthService) {
                this.restUrl = `${this.apiConfig.baseUrl}/${this.endpoint}`
                this.auth.user$.subscribe(user => {
                  this.readList().subscribe(items => {
                    this._items.next(items);
                    this._items.complete()
                  })
                })
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
    const method = patch ? 'patch' : 'put'
    return this.http.update(`${this.restUrl}/${id}/`, body);
  }

  public destroy(id: number|string) {}

  public readList(params = {}, forced: boolean = true): Observable<any> {
    if (forced) {
      return this.http.get(this.restUrl, params)
        .map((items: any) => {
          return items.map(item => new this.recordClass(item) as T);
        });
    } else {
      return this.items;
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

  public read(id: string|number) {
    return this.http.get(`${this.restUrl}/${id}`)
      .map((item: any) => new this.recordClass(item) as T);
  }

  public loadRelation(id: number) {

  }
}
