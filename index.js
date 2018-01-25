var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1, prop2: 2}
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
return delete newObject.key
}

function destructivelyDeleteFromObjectByKey(object, key){
return delete object[key]
}
