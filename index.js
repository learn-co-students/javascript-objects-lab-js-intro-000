var recipes = {};

function updateObjectWithKeyandValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

//returns a clone of `object` by adding `key` and `value`
//(it is non-destructive):

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value
}
