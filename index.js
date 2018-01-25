//hii
//highlighted


var recipes = new Object();

function destructivelyUpdateObjectWithKeyAndValue(recipes, artistName, songTitle){
  recipes[artistName] = songTitle
  return recipes
}

function updateObjectWithKeyAndValue(recipes, artistName, songTitle){
  return Object.assign({},recipes,{[artistName]:songTitle})
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({},obj,{})
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
