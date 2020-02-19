var obj = {
  prop: 1,
  prop2: 2
}

function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object,key){
  var newObj = obj
  delete obj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj.prop
  return obj
}
