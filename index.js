let recipes = {};

const updateObjectWithKeyAndValue = (object, key, value) =>{
  let ret = Object.assign({}, object );
  return Object.assign(ret, {[key]: value});
};

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) =>{
  object[key] = value;
  return object;
};

const deleteFromObjectByKey = (object, key) =>{
  let newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
};

const destructivelyDeleteFromObjectByKey = (object, key) =>{
  delete object[key];
  return object;
};
