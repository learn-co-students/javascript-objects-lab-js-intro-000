var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object,{[key], value});
}


function deleteFromObjectByKey(object, key){
  var newly =  Object.assign({},object)
  delete newly[key]
  return newly
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
