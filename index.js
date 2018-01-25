var recipes = {}

// non-destructive
function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value})
}


// destructive
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
}


// non-destructive
function deleteFromObjectByKey(object, key) {
 var object2 = Object.assign({}, object)
 delete object2.key
 return object2
}


// destructive
function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]
 return object
}
