var recipes = {
  quesadilla: ['tortilla', 'cheese'],
  omelette: ['eggs', 'cheese', 'peppers']
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
  return object
}

function deleteFromObjectByKey(object, key) {
var newObj = Object.assign({}, object)
  return delete newObj[key]
  return object
}
