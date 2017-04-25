import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface IAssignment {
  id?: number;
  name: string;
  description: string;
  due_by: string;
  out_of: number;
  course: number;
}

export class AssignmentService extends Store<IAssignment> {
  endpoint = 'assignments';
  recordClass = class Assignment extends Record {};
  relations = [];
}
