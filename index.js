var recipes ={}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value})
}

function deleteFromObjectByKey(object , key){
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  delete object[key]
  return object
}
