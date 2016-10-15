var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = clone(object);
  delete newObj[key]
  return newObj
}

function clone(orig) {
  var clone = {}, key;

  for ( key in orig )
  {
    clone[key] = orig[key];
  }

  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
