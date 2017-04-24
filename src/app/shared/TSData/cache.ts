import { Observable } from 'rxjs/Observable';
export class Cache {
  private valid = false;
  // O(1)
  private cacheObj = {};
  // Add object to cache. This is similar to "create"
  public addObj(obj: any) {
    Object.assign(this.cacheObj, {[obj.id]: obj});
  }
  // Set object in the cache
  public setObj(obj: any) {
    this.cacheObj[(obj.id as number)] = obj;
  }
  public getObj(id: number): Observable<any> {
    return Observable.of(this.cacheObj[id]);
  }
  public updateObj(obj: any) {
    // Well they are the same thing,
    this.addObj(obj);
  }
  public objExists(id: number): boolean {
    return this.cacheObj[id] !== undefined;
  }
  // Operations on everything, or on a list
  public refresh(objs: Array<any>) {
    objs.forEach(obj => Object.assign(this.cacheObj, {[obj.id]: obj}));
  }
  public getAll(filters: any = {}): Observable<Array<any>> {
    let arr = this.toArray();
    // console.log(filters)
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        arr = arr.filter(item => {
          return item[key] === filters[key];
        });
      }
    }
    return Observable.from(arr).toArray();
  }
  // Validation functions
  public isValid(): boolean {
    return this.valid;
  }
  public invalidate() {
    this.valid = false;
  }
  public validate() {
    this.valid = true;
  }
  // Nice Extensions
  private toArray(): Array<any> {
    const arr = [];
    for (const key in this.cacheObj) {
      if (this.cacheObj.hasOwnProperty(key)) {
        arr.push(this.cacheObj[key]);
      }
    }
    return arr;
  }
}
