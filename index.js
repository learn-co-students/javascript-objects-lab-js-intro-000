var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}

// returns an object with the orignal key value pairs and the new key value pair

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value

    return object
}

// does not modify the original object, but rather returns a clone with the new data

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

// returns an object with an updated key value pair

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}
