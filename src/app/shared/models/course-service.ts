import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface ICourse {
  id: number;
  name: string;
  teachers: any[];
  students: any[];
  course_grade: any[];
}

export class CourseService extends Store<ICourse> {
  endpoint = 'courses';
  recordClass = class Course extends Record {};
  relations = [];
}
