var recipes = {
  
}

function updateObjectWithKeyAndValue (object,key,value){
  var newObject = {}
  for (var i in object){
    newObject[i] = object[i]
  }
  newObject[key] = value
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue (object,key,value){
  object[key] = value
  return object
}

function deleteFromObjectByKey (object,key){
  var newObject = {}
  for (var i in object){
    newObject[i] = object[i]
  }
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey (object,key){
  delete object[key]
  return object
}