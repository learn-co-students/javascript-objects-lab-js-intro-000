var recipes = {};

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (object,key,value) {
  object[key] = value;
  return object;
}


function deleteFromObjectByKey(object) {
  var newObj = Object.assign({},object);
  delete newObj.prop;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object) {

  delete object.prop;
  return object;

}
