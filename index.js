var updateObjectWithKeyAndValue= (object, key, value) =>{
  return Object.assign({},object,{[key]: value});
}
var destructivelyUpdateObjectWithKeyAndValue= (object, key, value) =>{
  return Object.assign(object,{[key]: value})
}
var deleteFromObjectByKey= (object, key) =>{
  var obj = Object.assign({},object);
  delete obj[key];
  return obj;
}
var destructivelyDeleteFromObjectByKey= (object, key) =>{
  delete object[key];
  return object;
}
