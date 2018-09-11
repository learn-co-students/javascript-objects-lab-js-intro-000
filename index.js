var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return  Object.assign({}, object, { [key] : value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, values) {

     object[key] = values

     return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

function deleteFromObjectByKey(object, key) {

  delete object[key]

  return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]

 return object
}
