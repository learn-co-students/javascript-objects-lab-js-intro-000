function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
var obj = {foo: 'bar'}
var newObj = Object.assign({}, obj)
newObj
delete newObj.foo
return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop
  return object;
}
