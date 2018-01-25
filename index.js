
var recipes = {dinner: "meat", breakfast: "eggs"}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObb = Object.assign({}, object, {[key]: value});
  return newObb;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
}

function deleteFromObjectByKey(object, key) {
  var newObb = Object.assign({}, object);
  delete newObb[key];
  return newObb;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "brunch", "bagels")
// 1) Objects defines a `recipes` object:
//
//       Error: Expected 'undefined' to equal 'object'
//       + expected - actual
//
//       -undefined
//       +object
//
//       at assert (node_modules/expect/lib/assert.js:29:9)
//       at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
//       at Context.<anonymous> (test/index-test.js:5:28)
//
//   2) Objects updateObjectWithKeyAndValue(object, key, value) returns a clone of `object` by add
// ing `key` and `value` (it is non-destructive):
//      ReferenceError: updateObjectWithKeyAndValue is not defined
//       at Context.<anonymous> (test/index-test.js:12:14)
//
//   3) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with
//  the given `key` and `value` (it is destructive):
//      ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
//       at Context.<anonymous> (test/index-test.js:25:14)
//
//   4) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and return
// s the new object (it is non-destructive):
//      ReferenceError: deleteFromObjectByKey is not defined
//       at Context.<anonymous> (test/index-test.js:41:14)
//
//   5) Objects destructivelyDeleteFromObjectByKey(object, key) deletes `key` from object and retu
// rns object:
//      ReferenceError: destructivelyDeleteFromObjectByKey is not defined
//       at Context.<anonymous> (test/index-test.js:50:14)
