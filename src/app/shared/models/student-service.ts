import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface IStudent {
  id: number;
  user: any;
  hours: any[];
}

export class StudentService extends Store<IStudent> {
  endpoint = 'students';
  recordClass = class Student extends Record {};
  relations = [];
}
