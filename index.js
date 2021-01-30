function updateObjectWithKeyAndValue(object, key, value) {
    let newObject = Object.assign({}, object, { [key]: value })
    return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key) {
    let objectAfterDeletion = Object.assign({}, object)
    delete objectAfterDeletion[key]
    return objectAfterDeletion
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
