var recipes={};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object, {[key]:value});
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  // var object = {pizza: 'yum'}
  // Object.assign({}, object) creates new object that is a clone of object
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
