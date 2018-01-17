var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({},object,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object,{[key]: value})
}

function deleteFromObjectByKey(object, key) {
  let x = Object.assign({},object);
  delete x[key];
  return x;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object
}
