var recipes = {
  breakfast: "eggs",
  lunch: "sandwich",
  dinner: "soup"
};

function updateObjectWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, { [key]: value })
};


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object;
};

destructivelyUpdateObjectWithKeyAndValue(recipes, "snack", "cheese")


function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj
};

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
};
