import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface IHour {
  name: string;
  course: number;
  period: number;
  students: any[];
}

export class HourService extends Store<IHour> {
  endpoint = 'hours';
  recordClass = class Hour extends Record {};
  relations = [];
}
