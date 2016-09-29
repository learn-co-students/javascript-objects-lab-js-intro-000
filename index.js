var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]: val});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj[key] = val;
  // can't use obj.key = value. not sure why. assigning it to value?
  return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key;
  // or delete obj[key];
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  // or delete obj[key];
  return newObj;
}
