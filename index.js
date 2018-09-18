var recipes = {


}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign( {}, obj, { [key]:value } )
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(obj, key){
  var copy = Object.assign({}, obj);
  copy[key] = undefined;
  return copy
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj
}
