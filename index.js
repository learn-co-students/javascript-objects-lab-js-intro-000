var recipes = {}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value
  return obj
}
function updateObjectWithKeyAndValue(obj,key,value){
  var newobj = Object.assign(obj,{[key]:value})
  return newobj
}
function deleteFromObjectByKey(obj,key){
  var newobj = obj
  delete newobj['key']
  return newobj
}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj['key']
  return obj
}
