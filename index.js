var recipes = {};

var updateObjectWithKeyAndValue =(object, key, value)=> {
  var output = Object.assign({}, object);
  output[key] = value;
  return output
}

var destructivelyUpdateObjectWithKeyAndValue =(object, key, value)=> {
  object[key] = value;
  return object
}

var deleteFromObjectByKey =(object, key)=> {
  var output = Object.assign({}, object);
  delete output[key];
  return output
}

var destructivelyDeleteFromObjectByKey =(object, key)=> {
  delete object[key];
  return object
}
