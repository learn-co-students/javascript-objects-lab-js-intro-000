const recipes = {cake:'eggs'}

function updateObjectWithKeyAndValue(object, key , value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

var object = {cake: 'egg'}
var newObj = Object.assign({}, object)

function deleteFromObjectByKey(object, key){
  delete newObj.cake
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
