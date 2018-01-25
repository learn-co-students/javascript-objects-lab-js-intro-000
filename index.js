var recipes = {
  flour: '2 Cups',
  eggs: '3',
  chocolate: '1 Bar',
  butter: '3 sticks'
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
var newRecipes = Object.assign({}, object)
delete newRecipes.key
return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
