var recipes = {

};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

// Top Tip: ES 6 provides a way to use variables as
// object keys — you have to wrap the key in square
// brackets ([]). Using the above example, you could
// write var meals = { [firstMeal]: 'oatmeal' } and
// then meals would be { breakfast: 'oatmeal' }.
