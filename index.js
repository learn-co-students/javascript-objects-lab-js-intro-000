var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({})
}


//each code most be spelled out. (i.e OBJECT instead of "obj")
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

// This is destructive
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}

//returns without changing the objects (no destructive)
function deleteFromObjectByKey(object, key){
  //you can use a around word for this part recipes
   recipes = Object.assign({}, object)
  delete recipes[key]
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key){
return Object.assign({}) //it said return without the key value pair.

}

function destructivelyDeleteFromObjectByKey(object, key){
  //it all about the place holder. key and value.
  delete object[key]
  return object
}
