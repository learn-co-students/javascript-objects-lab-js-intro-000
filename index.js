var recipes = {cookie: 'chocolate chip',cake:'carrot'}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({recipes}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var k = key
  var v = value 
  var obj = object
  obj[k]=v
  return obj
}

function deleteFromObjectByKey(object, key){
  var obj = object
  var newObj = Object.assign({},obj)
  var k = key
  delete newObj[k]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  var obj = object
  var k = key
  delete obj[k]
  return obj
}