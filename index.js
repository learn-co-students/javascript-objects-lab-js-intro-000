var updateObjectWithKeyAndValue = (object,key,value) =>{
  return Object.assign({},object,{[key]:value})
}

var destructivelyUpdateObjectWithKeyAndValue = (object,key,value) => {
  return Object.assign(object,{[key]:value})
}

var deleteFromObjectByKey = (object,key) => {
 var object2 = Object.assign({},object)
 delete object2[key];
 return object2
}

var destructivelyDeleteFromObjectByKey = (object,key) =>{
  delete object[key]
  return object;
}
