var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes['prop2'] = 2
  return recipes
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {prop2: 2})
}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj, {prop: 'new value'})
  return newObj
}
