var recipes = new Object ({});

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}
updateObjectWithKeyAndValue(recipes, 'prop', '1');


function destructivelyUpdateObjectWithKeyAndValue(obj, key, newValue) {
  obj[key] = newValue
  return obj
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', '2');


function deleteFromObjectByKey(obj, key) {
  var pseudo = Object.assign({}, obj);
  delete pseudo.key;
  return pseudo;
}
deleteFromObjectByKey(recipes, 'prop');


function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
destructivelyDeleteFromObjectByKey(recipes, 'prop');
