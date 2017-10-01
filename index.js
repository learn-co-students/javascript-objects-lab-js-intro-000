// function Objects() {
//   var recipes = {breakfast: 'eggs'};
//   // var recipes = new Object(breakfast: 'eggs');
//
//   // return recipes;
// }

  var recipes = {breakfast: 'eggs'};

function updateObjectWithKeyAndValue (objectVar, keyVar, valueVar) {
  debugger
  var cloneObject = Object.assign({}, objectVar)

  cloneObject[keyVar] = valueVar;
  return cloneObject;

}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {

  object[key] = value
  return object

}

function deleteFromObjectByKey (object, key) {

  var cloneObject = Object.assign({}, object)

  delete cloneObject[key];
  return cloneObject;

}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete object[key]

  return object

}
