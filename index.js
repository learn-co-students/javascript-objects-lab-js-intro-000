var recipes = {Salad: 'romaine lettuce', Ingredients: 'Carrots, Onions'};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
updateObjectWithKeyAndValue(recipes, Tomatoes, '1 cup');

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}
updateObjectWithKeyAndValue(Toppings, Cheese, '1/2 cup');

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, Sides, 'Cranberries');

function deleteFromObjectByKey(object, key){
  return delete recipes.sides;
}
deleteFromObjectByKey();

function destructivelyDeleteFromObjectByKey(object, key){
  recipes.Salad = 'Iceberg lettuce';
  return recipes;
}
destructivelyDeleteFromObjectByKey();

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
destructivelyDeleteFromObjectByKey(recipes, Ingredients);
