var recipes = {};

function  updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, { [key]: value })

}

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value
   return object
}

function deleteFromObjectByKey(object, key){
  var bb = Object.assign({}, object);
  delete bb[key]
  return bb
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
