var recipes = {}

var updateObjectWithKeyAndValue = (obj, key, val) => {
  let newObj = Object.assign({}, obj);
  newObj[key]=val;
  return newObj;
}

var destructivelyUpdateObjectWithKeyAndValue = (obj, key, val) => {
  obj[key]=val;
  return obj;
}

var deleteFromObjectByKey = (obj, key) => {
  let newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

var destructivelyDeleteFromObjectByKey = (obj, key) => {
   delete obj[key];
   return obj;
}
