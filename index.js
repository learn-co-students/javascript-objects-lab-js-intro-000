// define my object
var recipes = new Object()

//not modifying original, using clone
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

// we get to destroy
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

//no more destruction
function deleteFromObjectByKey(object, key){
  var testObj = Object.assign({}, object)
  delete testObj[key]
  return testObj
}

//Super Delete
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
