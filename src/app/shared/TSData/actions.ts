import {Observable} from 'rxjs/Observable';
import {INITIAL_STATE, ModelState} from './interfaces';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/pluck';
import {Action} from '@ngrx/store';

export const CREATE = 'CREATE';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const READ = 'READ';
export const READ_SUCCESS = 'READ_SUCCESS';
export const READ_LIST = 'READ_LIST';
export const READ_LIST_SUCCESS = 'READ_LIST_SUCCESS';
export const UPDATE = 'UPDATE';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const DElETE = 'DElETE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

export interface BaseModel {
  id: number;
}

export const createAction = (modelName: string) => `[${modelName}] ${CREATE}`;
export const createSuccessAction = (modelName: string) => `[${modelName}] ${CREATE_SUCCESS}`;
export const readAction = (modelName: string) => `[${modelName}] ${READ}`;
export const readSuccessAction = (modelName: string) => `[${modelName}] ${READ_SUCCESS}`;
export const readListAction = (modelName: string) => `[${modelName}] ${READ_LIST}`;
export const readListSuccessAction = (modelName: string) => `[${modelName}] ${READ_LIST_SUCCESS}`;
export const updateAction = (modelName: string) => `[${modelName}] ${UPDATE}`;
export const updateSuccessAction = (modelName: string) => `[${modelName}] ${UPDATE_SUCCESS}`;
export const deleteAction = (modelName: string) => `[${modelName}] ${DElETE}`;
export const deleteSuccessAction = (modelName: string) => `[${modelName}] ${DELETE_SUCCESS}`;
export const searchAction = (modelName: string) => `[${modelName}] ${SEARCH}`;
export const searchSuccessAction = (modelName: string) => `[${modelName}] ${SEARCH_SUCCESS}`;


export class CreateAction implements Action {
  type;
  constructor(modelName: string, public payload: any) {
    this.type = createAction(modelName);
  }
}

export class CreateSuccessAction implements Action {
  type;
  constructor(modelName: string, public payload: any) {
    this.type = createSuccessAction(modelName);
  }
}

export class ReadAction implements Action {
  type;
  constructor(modelName: string, public payload: number) {
    this.type = readAction(modelName);
  }
}

export class ReadSuccessAction implements Action {
  type;
  constructor(modelName: string, public payload: any) {
    this.type = readSuccessAction(modelName);
  }
}

export class ReadListAction implements Action {
  type;
  constructor(modelName: string, public payload: any = {}) {
    this.type = readListAction(modelName);
  }
}

export class ReadListSuccessAction implements Action {
  type;
  constructor(modelName: string, public payload: any[]) {
    this.type = readListSuccessAction(modelName);
  }
}

export class UpdateAction implements Action {
  type;
  constructor(modelName: string, public payload: any) {
    this.type = updateAction(modelName);
  }
}

export class UpdateSuccessAction implements Action {
  type;
  constructor(modelName: string, public payload: any) {
    this.type = updateSuccessAction(modelName);
  }
}

export class DeleteAction implements Action {
  type;
  constructor(modelName: string, public payload: number) {
    this.type = deleteAction(modelName);
  }
}

export class DeleteActionSuccess implements Action {
  type;
  constructor(modelName: string) {
    this.type = deleteSuccessAction(modelName);
  }
}

export class SearchAction implements Action {
  type;
  constructor(modelName: string, public payload: any) {
    this.type = searchAction(modelName);
  }
}

export class SearchSuccessAction implements Action {
  type;
  constructor(modelName: string, public payload: any[]) {
    this.type = searchSuccessAction(modelName);
  }
}


export function Reducer<T>(modelName: string) {
  return (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) => {
    const method = descriptor.value;
    descriptor.value = function (state: ModelState<T> = INITIAL_STATE, action: Action) {
      // console.log(readListAction(modelName), action.type);
      switch (action.type) {
        case readAction(modelName):
          state.entities.push(action.payload);
          return {
            ...state
          };
        case readListAction(modelName):
          return {
            ...state
          };
        case readListSuccessAction(modelName):
          return Object.assign(state, {entities: action.payload});
        case deleteAction(modelName):
          return {
            ...state
          }
        case searchAction(modelName):
          return {
            ...state
          };
      }
      return method.apply(this, arguments);
    };
  } ;
}

