var obj = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value){
 var newObj = Object.assign({}, object,{[key]:value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
var object1=Object.assign({},object);
delete object1[key];
return object1;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
