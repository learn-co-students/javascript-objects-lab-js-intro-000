var recipes ={
  1: "palm_oil",
  2: "pumpkin",
  3: "carrots",
  4: "water"
}
undefined
function updateObjectWithKeyAndValue(object, key, value){
var newObj = Object.assign ({}, object, { [key]: value });
return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}

function deleteFromObjectByKey(object, key){
var newObj = Object.assign({}, object)
delete newObj[key]
return newObj
}



function destructivelyDeleteFromObjectByKey (object, key){
delete object[key]
return object
}
