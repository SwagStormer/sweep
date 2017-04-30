import { Store } from '../TSData/store';
import { Record } from '../TSData/record';

export interface IGradingCategory {
  id: number;
  course: number;
  weight: number;
  name: string;
}

export class GradeCategoryService extends Store<IGradingCategory> {
  endpoint = 'grade_categories';
  recordClass = class GradingCategory extends Record {}
}
