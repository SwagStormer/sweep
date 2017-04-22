import {Store} from "../TSData/store";
import {Record} from "../TSData/record";
export interface IHour {
  name: string;
}

export class HourService extends Store<IHour> {
  endpoint = 'hours';
  recordClass = class Hour extends Record {};
  relations = [];
}
