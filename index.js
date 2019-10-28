var recipes = {cookie: "chips", salsa: "tomatoes"};
var newObj = Object.assign({}, recipes)

function updateObjectWithKeyAndValue(object, key, value) {
  let newObj = Object.assign({}, object, { [key]: value })
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key];
  newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete object[key];
  object;
}
