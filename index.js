
function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({},object, {[key]:value})
  return newObj
  }




function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
  }



function deleteFromObjectByKey(object, key){
  var obj2 = Object.assign({}, object, key)
  delete obj2[key]
  return obj2
  }

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object

  }
