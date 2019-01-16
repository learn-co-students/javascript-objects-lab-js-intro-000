var recipes=new Object();

function updateObjectWithKeyAndValue(object, key, value){
  var obj2=Object.assign({},object,{[key]:value});
  return obj2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var obj2=Object.assign({},object);
  delete obj2[key];
  return obj2;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
