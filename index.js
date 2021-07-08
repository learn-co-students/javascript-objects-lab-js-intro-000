var recipes = new Object();

const updateObjectWithKeyAndValue = (object, key, value) => {
  //playlist = Object.assign({}, playlist, {[artistName]: songTitle}
  object = Object.assign({}, object, {[key]:value})
  return object
}

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
    object[key] = value
    return object
}

const deleteFromObjectByKey = (object, key) => {
  var newobj = Object.assign({}, object)
  delete newobj[key]
  return newobj
}

const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]
  return object
}
