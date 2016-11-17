var recipes = {
  first: 'one',
  second: 'two',
  third: 'three'
}

function updateObjectWithKeyAndValue(recipes){
  return Object.assign(recipes, { "prop": 1 }, {"prop2": 2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes){
  recipes.prop = 1
  recipes.prop2 = 2
  return recipes
}

function deleteFromObjectByKey(recipes){
  return recipes
}


function destructivelyDeleteFromObjectByKey(recipes){
  delete recipes.first
  return recipes
}
