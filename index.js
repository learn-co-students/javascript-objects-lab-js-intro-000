function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value})
}
function destructivelyUpdateObjectWithkeyAndValue(object, key, value){
  return Object.assign(object, {[key] : value})
}
deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}
destructiveltDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
var recipes = { sauce : 'tomato'; powder : 'milk'};
