var recipes = {
  'breakfast': 'cereals'
}

function updateObjectWithKeyAndValue(object, key, value){
  var nobj = Object.assign({}, object)
  nobj[key] = value
  return nobj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
