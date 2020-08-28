var recipes = {turkey: 'gravy', beef: 'burger'}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key]= value
   return object
}

function deleteFromObjectByKey(object, key) {
  var i = delete object.key
  return i
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
