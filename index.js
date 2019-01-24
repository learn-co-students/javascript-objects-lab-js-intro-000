
var recipes = {
  flour: "2 cups",
  milk: "1.5 cups",
  eggs: "2 eggs",
  butter: "2 tablespoons"
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  return newObj[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
