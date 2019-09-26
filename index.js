var recipes = {
  breakfast: 'Eggs'
};

function updateObjectWithKeyAndValue (object, key, val) {
  var newObj = Object.assign({}, object, { [key]: val })
return newObj
};

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (object, key) {
  var newObj =  delete object.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
