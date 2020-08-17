var recipes = {food: "mango"}

function updateObjectWithKeyAndValue(recipes, food, value){
  return Object.assign({}, recipes, { [food]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  // var newArray = Object.assign({}, object[key])
  var newObj = delete object.key;
  // return object;
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key){
 return delete object[key];
  
}