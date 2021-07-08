var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(recipes, key , value) {
  return Object.assign({}, recipes, { [key]: value} )
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign({}, recipes);
  delete newObj[key]
  return newObj

}

  //var obj = { foo: 'bar' }
  //var newObj = Object.assign({}, obj)

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}
