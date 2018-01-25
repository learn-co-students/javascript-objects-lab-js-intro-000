var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  const obj = {prop: 1}
  return Object.assign({}, obj, { prop2: 2 })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(object, key){
  var obj = { prop: 1 }
  delete obj.prop
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key){
  var obj = { prop: 1 }
  delete obj.prop
  return obj
}
