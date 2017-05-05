import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import * as Crud from './actions';
import {ModelState} from './interfaces';
import {Observable} from 'rxjs/Observable';
import {HttpService} from './http.service';
import {updateAction, deleteAction, readAction, readListAction, Reducer, createAction, searchAction} from './actions';
import { ProjectApiConfig } from './project-api-config';

interface ListResponse {
  results: Array<any>;
  count: number;
  previous: string;
  next: string;
}

// Solution 1

@Injectable()
export abstract class ModelService<T> {

  set endpoint(value) {
    this.restUrl = `${this.apiConfig.apiBase}${value}`;
  }

  abstract recordClass;

  private restUrl;

  private apiConfig: ProjectApiConfig = new ProjectApiConfig();

  static selectResults<T>(state: ModelState<T>) {
    console.log(state);
    return state.entities;
  }

  constructor(private http: HttpService) {

  }

  public create(payload): Observable<any> {
    return this.http.post(this.restUrl, payload)
      .map(newItem => new this.recordClass(newItem));
  }

  public update(id: number|string, body: any, patch = true): Observable<any> {
    const method = patch ? 'patch' : 'put';
    return this.http[method](`${this.restUrl}/${id}/`, body);
  }

  public read(id: number | string): Observable<T> {
    return this.http.get(`${this.restUrl}/${id}`);
  }

  public readList(params: any = {}): Observable<T[]> {
    return this.http.get(this.restUrl, params);
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

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.restUrl}/${id}`);
  }

}

export abstract class BaseEffects {

  protected readAction;
  protected readListAction;
  protected destroyAction;
  protected updateAction;
  protected createAction;
  protected searchAction;

  constructor(protected modelName: string) {
    this.readAction = readAction(this.modelName);
    this.readListAction = readListAction(this.modelName);
    this.destroyAction = deleteAction(this.modelName);
    this.updateAction = updateAction(this.modelName);
    this.createAction = createAction(this.modelName);
    this.searchAction = searchAction(this.modelName);
  }
}

