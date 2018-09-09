var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return  Object.assign({}, object, { [key] : value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, values) {

     object[key] = values

     return object
}
