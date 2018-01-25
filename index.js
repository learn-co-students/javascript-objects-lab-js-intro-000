var recipes ={
  eggs:3
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({},object,{
    [key]:value
  });
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign(object,{
    [key]:value
  });
  return newObj;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object);
  newObj;
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object);
  newObj;
  delete newObj[key];
  delete object[key];
  object;
  return newObj;
}
