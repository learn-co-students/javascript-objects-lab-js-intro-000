var recipes = {}


// returns an object with the orignal key value pairs and the new key value pair
// it does not modify the original object, but rather returns a clone with
// the new dat
function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    // updates `object` with the given `key` and `value` (it is destructive)
    // and returns the entire updated object
    return Object.assign(object, {[key]: value})
}


function deleteFromObjectByKey(object, key) {
    // deletes `key` from a clone of object and returns the new object
    // (it is non-destructive)
    return delete Object.assign({},object).key
}

function destructivelyDeleteFromObjectByKey(object, key) {
    // returns object without the delete key/value pair
    delete object[key]
    return object
}
