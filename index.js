var recipes = {
  breakfast: 'eggs',
  lunch: 'sandwich',
  dinner: 'steak'
}

function updateObjectWithKeyAndValue(recipes, snack, chips){
  return Object.assign({}, recipes,{[snack]: chips})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, snack, chips){
  recipes[snack] = chips;
  return recipes
}

function deleteFromObjectByKey(recipes, lunch){
  var newObject = Object.assign({},recipes)
  delete newObject.lunch;
  return newObject
}

function destructivelyDeleteFromObjectByKey(recipes, lunch){
  delete recipes.lunch;
  return recipes
}
