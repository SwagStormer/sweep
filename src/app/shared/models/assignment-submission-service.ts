import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface IAssignmentSubmision {
  name: string;
}

export class AssignmentSubmisionService extends Store<IAssignmentSubmision> {
  endpoint = 'assignmentSubmisions';
  recordClass = class AssignmentSubmision extends Record {};
  relations = [];
}
