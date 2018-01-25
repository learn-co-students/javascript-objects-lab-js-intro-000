var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value){
  //non-destructive
  return Object.assign({}, object,{ [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //destructive 
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  //non-destructive
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  //destructive
  delete object[key];
  return object;
}