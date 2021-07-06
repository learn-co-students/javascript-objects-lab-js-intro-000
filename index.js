var recipes = {test1:'test2'}

function updateObjectWithKeyAndValue(object, key, value){
  var object2 = Object.assign({},object,{[key]:value})
  return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var object2 = Object.assign({},object)

  delete object2[key]

  return object2
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
