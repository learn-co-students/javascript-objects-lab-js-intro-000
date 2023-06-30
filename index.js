var recipes = { "chicken": "gravy" };

  function updateObjectWithKeyAndValue(obj, key, value) {
   return Object.assign({}, obj, { [key]: value })
 } /*We can use Object.assign() to create a new object and pass it properties from
 existing objects. The first value is the target object that gets modified.
 All the values afterward can be any number of objects.*/

    function deleteFromObjectByKey(object, key) {
     var newobject = Object.assign({}, object)
     delete newobject[key]
     return newobject
    }
    function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
      object[key] = value
      return object
    }
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
   }
