var recipes = {}

var updateObjectWithKeyAndValue = function(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value})
}

var destructivelyUpdateObjectWithKeyAndValue  = function(recipes, key, value){
  recipes[key] = value
  return recipes
}

var deleteFromObjectByKey = function(recipes, key){
  return Object.assign({}, recipes, {[key]: undefined})
}


var destructivelyDeleteFromObjectByKey = function(recipes, key){
  delete recipes[key]
  return recipes
}
