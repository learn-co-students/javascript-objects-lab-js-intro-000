var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key] : value})



}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value

  return object;
}

function deleteFromObjectByKey(object, key){//returns a clone so Object.assign({},object)
  var newobj = Object.assign({},object)
  delete newobj[key]

  return newobj;

}

function destructivelyDeleteFromObjectByKey(object, key){// modifies the original
  //let clone = Object.assign({},object)
  delete object[key];
  return object;

}
