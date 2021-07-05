var recipes = {
  'eggs': 3,
  'Cups of Flour': 2,
  'Milk': '3 cups'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key, value) {
  var newObj = Object.assign({}, object, { [key]: value })
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
