import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface IPeriod {
  id: number;
  name: string;
  courses: any[];
}

export class PeriodService extends Store<IPeriod> {
  endpoint = 'periods';
  recordClass = class Period extends Record {};
  relations = [];
}
