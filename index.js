var recipes = {};

recipes.prop = 1;

function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({}, obj, {[key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value;
  return obj
}


function deleteFromObjectByKey(obj, key){
  return Object.assign({}, delete key.value)
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}

//var newObj = Object.assign({}, obj)

//newObj // { foo: 'bar' }

//delete newObj.foo // true

//newObj // {}

//obj // { foo: 'bar' }
