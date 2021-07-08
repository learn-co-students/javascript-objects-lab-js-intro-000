var recipes = {
  oatmeal: "1cup",
  raisins: "1/2 cup",
  sugar: "1gram"
}



function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value
  return object
}

function deleteFromObjectByKey(object, key){
  var newReceipe= Object.assign({}, object)
  delete newReceipe[key]
  return newReceipe
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
