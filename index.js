var recipes = {}

function Objects() {
  return recipes

}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(recipes, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign(object, { [key]:value})
}

function deleteFromObjectByKey(object, key){
  var object = Object.assign({}, object,  [ key ]  )
  delete object[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object 
}
