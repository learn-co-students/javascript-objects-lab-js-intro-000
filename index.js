var recipes = {sugar: '1 cup',
               butter: '1 stick',
               water: '1 cup'};
 function updateObjectWithKeyAndValue (object, key, value) {
            object[key] = value;
                 return object
               }
 function updateObjectWithKeyAndValue (object, key, value) {
       return  Object.assign ({}, object, {[key]: value})
               }
 function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
          object[key] = value;
            return object
                             }
function deleteFromObjectByKey (object, key) {

var newObj = {object};

delete newObj.key; // true
return newObj
}
function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object
}
