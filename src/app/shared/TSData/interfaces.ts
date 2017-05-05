export interface ModelState<T> {
  entities: T[];
}

export const INITIAL_STATE: ModelState<any> =  {
  entities: []
};
