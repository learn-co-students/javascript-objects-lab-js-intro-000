var recipes = {};
<<<<<<< HEAD

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object;
}

function deleteFromObjectByKey(object, key) {
  let newObject = {object};
  delete newObject.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
=======
>>>>>>> 3fa86362fd1f9a4494250c6ef763ee9bf3c780c9
