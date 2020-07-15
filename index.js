function updateObjectWithKeyAndValue(object, key, value) {
  //new resultObj
return Object.assign({}, object, { [key]: value })




}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  //delete from clone and return updated clone
  var holderObj = {};

  Object.assign(holderObj, object); console.log(holderObj)

  delete holderObj[key]; console.log(holderObj[key])

  return holderObj;


}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object;
}
