const recipes = {}

const updateObjectWithKeyAndValue = (obj, key, value) => {
  return Object.assign({}, obj, {[key]: value});
}

const destructivelyUpdateObjectWithKeyAndValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

const deleteFromObjectByKey = (obj, key) => {
  let newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

const destructivelyDeleteFromObjectByKey = (obj, key) => {
  delete obj[key];
  return obj;
}