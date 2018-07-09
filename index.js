var recipes={
  "prop":1
}

function updateObjectWithKeyAndValue(object, key, value){
  //var recipes={prop:1}
  return Object.assign({}, recipes,{prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}



function deleteFromObjectByKey(){
  var obj={prop:1}
  var newObj= Object.assign({},obj)
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object

}
