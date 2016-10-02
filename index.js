var recipes = {cake: "batter"}

function updateObjectWithKeyAndValue(recipes, key, value) {
  var newobj = Object.assign(recipes, {[key]: value})
  return newobj
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key]= value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newobj = Object.assign({}, recipes)
  delete newobj.key
  return newobj
}

function destructivelyDeleteFromObjectByKey(recipes,key) {
  delete recipes.key
  return recipes
}
