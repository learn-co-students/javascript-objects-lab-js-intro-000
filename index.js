var recipes = {"piecrust":"2 cups pastry flour"}
function updateObjectWithKeyAndValue(object, key, value){
var  object1 =Object.assign({},object,{[key]:value})
  return object1
}
//var object1{num:"1"}
function destructivelyUpdateObjectWithKeyAndValue(object1, key, value){
   object1[key]=value
   return object1
}
  function deleteFromObjectByKey (object, key){
    var obj = Object.assign({})
    delete obj[key]
    return obj
  }
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
