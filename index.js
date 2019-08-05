const recipes = {
  'Bacon': '3 strips',
  'Eggs': 3,
  'Flour': '3 cups',
  'Pasta': ['Spaghetti', 'Fetuccini'],
  'Cooking Oil': '1 cup',
  'Mushroom Soup': '1 can'
};

// console.log(recipes);

function updateObjectWithKeyAndValue(obj, key, value) {
  const newRecipes = Object.assign({}, obj, {[key]: value});
  return newRecipes;
};

// console.log(updateObjectWithKeyAndValue(recipes, 'Sauce', 'Tomato'));
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
};

// console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, 'Eggs', 10));

function deleteFromObjectByKey(obj, key) {
  const newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

// console.log(deleteFromObjectByKey(recipes, 'Cooking Oil'));
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}

// console.log(destructivelyDeleteFromObjectByKey(recipes, 'Pasta'));
