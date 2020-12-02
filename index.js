var recipes = {
    recipe1: 'spaghetti',
    recipe2: 'dessert box'
  }

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}
console.log(updateObjectWithKeyAndValue(recipes, 'recipe3', 'bakpao'));

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  let newRecipe = object;
  newRecipe[key] = value;
  return newRecipe;
}
console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, 'recipe4', 'toast'));

function deleteFromObjectByKey(object,key){
  let newRecipe = Object.assign({}, object);
  return delete newRecipe[key];
}
console.log(deleteFromObjectByKey(recipes, 'recipe2'));

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;

}
console.log(destructivelyDeleteFromObjectByKey(recipes,'recipe2'));
