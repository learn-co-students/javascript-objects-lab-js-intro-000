var recipes = {
salt: 'pinch'
}

//function updateObjectWithKeyAndValue(object, key, value) {
//return object[key] = value
//return recipe
//}

//function updateRecipe(recipe, ingredent, quantity) {
//  return Object.assign({}, recipe, { [ingredent]: quantity })
//}


//function updateRecipe(object, key, value) {
//return object[key] = vlue

//}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  return delete newObject.key

}

function destructivelyDeleteFromObjectByKey(object, key){
return delete object[key]

}
