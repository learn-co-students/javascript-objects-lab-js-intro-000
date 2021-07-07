// defines 'recipe' object
var recipes = {};

//returns object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj,{[key]: value});
}

//does not modify the original object(obj), but rather returns a clone with the new data (prop2: 2)
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}


function deleteFromObjectByKey(obj, key) {
   var newObj = Object.assign({}, obj);
   delete newObj[key];
   return newObj

}

function destructivelyDeleteFromObjectByKey(obj, key) {
   delete obj[key];
   return obj;

}
