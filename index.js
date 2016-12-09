var recipes = {
};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= '2';
  return object;
};

function deleteFromObjectByKey(object, key){
  var obj = {prop: 1}
  object[obj]= 'prop';
  return object;
};

function destructivelyDeleteFromObjectByKey(object, key){
  object.key='1';
  return object;
};
