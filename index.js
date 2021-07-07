var recipes = new Object ({});

var updateObjectWithKeyAndValue = function (object, key, value){

 return Object.assign({}, object, { [key]: value })

}

var destructivelyUpdateObjectWithKeyAndValue = function (object, key, value){

 return Object.assign(object, { [key]: value })

}


var deleteFromObjectByKey = function (object, key){

  var newObject = delete object.key

  return newObject // is undefined without return

}


var destructivelyDeleteFromObjectByKey = function (object, key){

  delete object.prop

  return object

}
