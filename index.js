var recipes = new Object()

function updateObjectWithKeyAndValue (obj, key, value) {
    return Object.assign({}, obj, {[key]: value})

}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
//  Object.assign({}, obj, {[key]: value})
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  //var newObj = destructivelyDeleteFromObjectByKey(object, key);
  return delete object.key
}
