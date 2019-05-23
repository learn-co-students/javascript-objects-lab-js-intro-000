var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
 //  Either way works.
 
 //return (Object.assign(obj, obj, {[key]: value}));
 obj[key]=value;
 return obj;
}

function deleteFromObjectByKey(obj, key) {
  var tmpObj = {};
  // delete key from result of obj copied into tmpObj
  delete Object.assign(tmpObj, obj)[key];
  return tmpObj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}