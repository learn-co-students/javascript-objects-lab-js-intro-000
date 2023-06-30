var recipes = {};  //apparently uninitialized works fine here...

function updateObjectWithKeyAndValue(obj, key, value) { //returns clone with new data
  var obj2 = {};
  var toAddIn = [value].toString();
  
  obj2 = Object.assign({}, obj);
  obj2[key] = toAddIn;
  return obj2;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) { // updates object with key and value
  var toAddIn = [value].toString();
  
  obj[key] = toAddIn;
  return obj;
}

function deleteFromObjectByKey(obj, key) { //does not modify original object, deletes key from NEW object (clone)
  var obj2 = {}
  
  obj2 = Object.assign({}, obj);
  delete obj2[key];
  return obj2;
}

function destructivelyDeleteFromObjectByKey(obj, key) { //modifies original object
  delete obj[key];
  return obj;
}