var recipes = {
  breakfast: "pancakes, eggs, two pounds of butter",
  brunch: "two pounds of butter, leftover pancakes, eggs",
  lunch: "three loaves of wonderbread",
  dinner: "one gallon tub of applesauce",
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  return obj;
}
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
