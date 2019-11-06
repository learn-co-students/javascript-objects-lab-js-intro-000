function updateObjectWithKeyAndValue(object, key, value){
 var juk = Object.assign({}, object, {[key] : value});
return juk
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value;
return object
}
function deleteFromObjectByKey(object, key) {
var kit = Object.assign({}, object,);
delete kit[key];
return kit
}
function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key];
return object
}
