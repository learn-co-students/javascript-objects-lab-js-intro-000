

function updateObjectWithKeyAndValue(object, key, value){
  var obj = {prop:1}
  obj.prop2 = 2
  return Object.assign({}, obj, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  var obj = {prop:1}
  obj.prop2 = 2
  object[key] = value
  return obj
}

function deleteFromObjectByKey(object, key){
  var obj = {prop:1}
  delete obj.prop
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  var obj = {prop:1}
  delete obj.prop
  object[key] = value
    return obj
}
