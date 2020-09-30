// non-destructive
const updateObjectWithKeyAndValue = (obj, key, value) => {
  return Object.assign({}, obj, {[key]: value})
}

// destructive
const destructivelyUpdateObjectWithKeyAndValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

// non-destructive
const deleteFromObjectByKey = (obj, key) => {
  const newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

// destructive
const destructivelyDeleteFromObjectByKey = (obj, key) => {
  delete obj[key];
  return obj;
}
