const recipes = { eggs: '1' };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

updateObjectWithKeyAndValue(recipes, 'flour', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'chocolate', '1 cup')

function deleteFromObjectByKey(object, key) {
  var recipes1 = Object.assign({}, recipes)
  delete recipes1.eggs
  return recipes1
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

destructivelyDeleteFromObjectByKey(recipes, 'chocolate')
