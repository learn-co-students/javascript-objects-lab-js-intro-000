var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  recipes = {prop: 1, prop2: 2 };
  return recipes
};


function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
    recipes.prop1 = "1",
    recipes.prop2 = "2"
    return recipes;
};


function deleteFromObjectByKey(recipes, prop){
 delete{};
 return recipes
};


function destructivelyDeleteFromObjectByKey(newrecipes, key){
  newrecipes = Object.assign({}, recipes);
  delete newrecipes.key;
  return newrecipes;
};
