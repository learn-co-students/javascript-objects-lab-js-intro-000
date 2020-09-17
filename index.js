var recipes = {
  apples: 6,
  nutmeg: '1/4 tsp'
};

function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign ({}, obj, { [key]: value })
}

 updateObjectWithKeyAndValue(recipes, 'cinammon', '1/4 tsp')

 recipes


function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value

  return recipes
}


var newRecipes = Object.assign({}, recipes)

function deleteFromObjectByKey(recipes, key) {
  delete newRecipes.key

  return newRecipes
}


function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]

  return recipes
}
