var recipes = { banana: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { [key]: value});
}

updateObjectWithKeyAndValue(recipes, 'apple', 2)


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "Kale", "3 handsfull")


// function deleteFromObjectByKey(object, key) {
//   var newObj = Object.assign({}, object, [key])
//
//   delete newObj.key
//   return newObj
// }
// deleteFromObjectByKey(recipes, "apple")


function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object, [key])

  delete newObj[key]
  return newObj
}
deleteFromObjectByKey(recipes, "apple")


function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key]
   return object
 }
destructivelyDeleteFromObjectByKey(recipes, "apple")
