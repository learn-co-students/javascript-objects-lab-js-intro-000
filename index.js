var recipes = new Object("  ");

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
};

function deleteFromObjectByKey(object, key) {
   var object = Object.assign({}, object);
   delete object.key;
   return object;
};

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key];
    return object;
};
