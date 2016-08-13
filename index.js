var recipes = {
  'recipe 1': "This is recipe 1",
  'recipe 2': "This is recipe 2",
  'recipe 3': "This is recipe 3",
  'recipe 4': "This is recipe 4"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, key, value);
  return newObj;
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
};

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
};

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
};
