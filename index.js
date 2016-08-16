var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value} )
}

function deleteFromObjectByKey(object, key) {
  var new_recipes = Object.assign({}, object)
  delete new_recipes[key]
  return new_recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
