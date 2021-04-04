var updateObjectWithKeyAndValue = (object, key, value) =>
  {
    return Object.assign({}, object, {[key]:value});
  }
var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) =>
  {
    return Object.assign(object, {[key]:value});
  }
var deleteFromObjectByKey = (object, key) =>
  {
    var newObject = Object.assign({}, object);
    delete newObject[key];
    return newObject;
  }
var destructivelyDeleteFromObjectByKey = (object, key) =>
  {
    delete object[key];
    return object;
  }
