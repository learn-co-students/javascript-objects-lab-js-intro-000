/*Objects defines a `recipes` object:

      Error: Expected 'undefined' to equal 'object'
      + expected - actual

      -undefined
      +object */
var recipes = {};

/*Objects updateObjectWithKeyAndValue(object, key, value) returns a clone of
`object` by adding `key` and `value` (it is non-destructive):*/
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

/*Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates
`object` with the given `key` and `value` (it is destructive):*/
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

/*Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of
object and returns the new object (it is non-destructive):   */
function deleteFromObjectByKey(obj, key) {
  return Object.assign({}, obj, key);
}

/*Objects destructivelyDeleteFromObjectByKey(object, key) deletes `key` from
object and returns object:  */
function destructivelyDeleteFromObjectByKey(obj, key) {
  obj[key];
  return obj;
}
