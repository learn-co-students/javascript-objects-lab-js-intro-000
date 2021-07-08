var obj = { prop: 1 };
function updateObjectWithKeyAndValue(obj, key, value){
  var ob=Object.assign({}, obj);
  ob[key]=value;
  return ob;
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj;
}
function deleteFromObjectByKey(obj, key){
  var ob=Object.assign({}, obj);
  delete ob[key];
  return ob;
}
function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}