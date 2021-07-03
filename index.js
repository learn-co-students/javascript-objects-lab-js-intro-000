 var recipes = {};

//question 1 Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
//question 2 Objects updateObjectWithKeyAndValue(object, key, value) it does not modify the original object, but rather returns a clone with the new data:
// Both question are within the same function this past answers question 1 `object, { [key]: value }` and this question 2 `return Object.assign({}`

//Object.assign({}, obj, { [key]: value })

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var object = {key}
  var newObj = Object.assign({}, object, [key])
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  // var object = {key}; <--- That's a re-defining of the object which is not necessary nor meaninigful
  // console.log(object) <---- within a console
  delete object[key]; // <---deletes the key which actually deletes the key/pair even though 'value' is not passed as an argument, it satisfies both questions
  return object; //<--- returns the mutated object
}
