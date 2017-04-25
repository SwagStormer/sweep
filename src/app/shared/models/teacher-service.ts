import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface ITeacher {
  id: number;
  user: any;
  courses: any[];
}

export class TeacherService extends Store<ITeacher>{
  endpoint = 'teachers';
  recordClass = class Teacher extends Record {};
  relations = [];
}
