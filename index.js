var recipes = {
  cake: "chocolate",
  cupcake: "vanilla",
  bread: "flour",
  hashbrown: "potato "
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

updateObjectWithKeyAndValue(recipes, "muffin", "strawberry")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "sandwich", "turkey")

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj; 
}

deleteFromObjectByKey(recipes, "cake")

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}

destructivelyDeleteFromObjectByKey(recipes, "cupcake")
