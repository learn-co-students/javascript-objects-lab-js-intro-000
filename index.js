var recipes = {prop:1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]: value});
}

updateObjectWithKeyAndValue([recipes, "prop2", 2])

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  Object.assign(object,{[key]: value});
  return object
}

var object = {foo: "bar"}

function deleteFromObjectByKey(newObject,key) {
var newObject = Object.assign({},object)
  delete newObject.key;
  return newObject
}

  function destructivelyDeleteFromObjectByKey(object,key) {
    delete object[key];
    return object
  }
