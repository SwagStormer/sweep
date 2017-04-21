
export interface Relation {
  // What service we want to go and get the data
  modelName: string;
  // What field we should have in our ?field= or {field: } query
  foreignKey: string;
  // Where we should put the object(s) that we get
  localField: string;
  // Many to many only:
  // Where is the array of id's that I am looking fore
  pkArray?: string;
}

// What a relation should look like on the store class

export interface Relations {
  hasMany?: Array<Relation>;
  belongsTo?: Array<Relation>;
  manyToMany?: Array<Relation>;
}
