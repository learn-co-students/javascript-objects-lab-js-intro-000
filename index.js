const updateObjectWithKeyAndValue = (object, key, value) => Object.assign({}, object, {[key]: value})

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value
  return object
}

const deleteFromObjectByKey = (object, key) => {
  let copy = Object.assign({}, object)
  delete copy[key]
  return copy
}

const destructivelyDeleteFromObjectByKey = (obj, key) => {
  delete obj[key]
  return obj
}
