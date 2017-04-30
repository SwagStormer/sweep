import { Store } from '../TSData/store';
import { Record } from '../TSData/record';

export interface ILetterGrade {
  id: number;
  letter: string;
  percent: number;
  course: number;
}

export class LetterGradeService extends Store<ILetterGrade>{
  endpoint = 'letter_grades';
  recordClass = class LetterGrade extends Record {};
}
