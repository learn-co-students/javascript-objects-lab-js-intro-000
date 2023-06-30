let recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value});

};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
};

function deleteFromObjectByKey(object, key){
  var obj = Object.assign({}, object);
  delete obj[key];
  return obj;
};

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
};
