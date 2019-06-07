var recipes = {
  'pasta': "Chicken Alfredo",
  seafood: "Lobster",
  salad: "Caesar Salad"
};


function updateObjectWithKeyAndValue (object, key, value){

  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}
updateObjectWithKeyAndValue({prop: 1}, 'prop 2', 2);


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue({prop: 1}, 'prop2', 2);


function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
