var recipes = {pasta:"water"}

function updateObjectWithKeyAndValue(recipes,key,value){
return Object.assign({},recipes,{[key]:value})
return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value
return object
}

function deleteFromObjectByKey(object, key){
var newObj = Object.assign({},object)
delete newObj[key]
return newObj
return object
}

function destructivelyDeleteFromObjectByKey(object,key){
delete object[key]
return object
}
