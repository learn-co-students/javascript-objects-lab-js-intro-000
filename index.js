var recipes = {
};

function updateObjectWithKeyAndValue(object, key, value){
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value){
  recipes.prop = '1';
  recipes.prop2 = '2';
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {prop: 'new value'});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(recipes, {prop: '1'}, {prop2: '2'});
}
