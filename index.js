var recipes = {}

var updateObjectWithKeyAndValue = (object, key, value) => {

  return Object.assign({}, object, {[key]: value})

}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {

  return Object.assign(object, {[key]: value})
}

var deleteFromObjectByKey = (object, key) => {

  var newObject = Object.assign({}, object)
  return delete newObject.key
}

var destructivelyDeleteFromObjectByKey = (object, key) => {

  delete object[key];

  return object
}
