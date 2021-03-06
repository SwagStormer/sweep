import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface IAssignmentSubmission {
  id: number;
  grade: number;
  graded: boolean;
  comments: string;
  student: number;
  assignment: number;
  submission_type: string;
  body?: string;
}

export class AssignmentSubmisionService extends Store<IAssignmentSubmission> {
  endpoint = 'assignment_submissions';
  recordClass = class AssignmentSubmision extends Record {};
  relations = [];
}
