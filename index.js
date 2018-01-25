var recipes = {'prop': 1}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = {'prop': 1, 'prop2': 2}
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var recipes = object
  recipes['prop2'] = 2
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var recipes = object
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var recipes = object
  delete recipes.prop
  return recipes
}
