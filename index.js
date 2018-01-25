// 1 Instantiate and assign object
var recipes = {};

// Add a key:value to object - non-destructively
function updateObjectWithKeyAndValue(object, key, value) {
    Object.assign(object, {[key] : value});
    return object;
}

// Add a key:value to object - destructively
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
}

// Deletes a key from object - non-destructively
function deleteFromObjectByKey(object, key){
    delete object.key;
    return object;
}

// Deletes a key from object - destructively
function destructivelyDeleteFromObjectByKey(object, key){
    delete object.key;
    var newObj = Object.assign({}, object);
    return newObj;
}
