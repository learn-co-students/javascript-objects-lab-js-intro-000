var recipes = {
  bananaDaiquiri: "rum, sugar syrup, lime juice, banana, ice"
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign ({}, object)
  newRecipe
  delete newRecipe.key
  return newRecipe
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
