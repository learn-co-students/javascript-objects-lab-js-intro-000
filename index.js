var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var object = {prop: 1}
  return Object.assign({}, object, {[key] : value})
}

var obj = {prop : 1};
function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
    Object.assign(object, {[key]: value});
    return object;
}

function deleteFromObjectByKey(object, key){
  var obj = {prop : 1};
  var newObj = delete obj[key];
  return newObj;
}

var obj = {prop : 1};
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
