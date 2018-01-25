//create recipes object
var recipes = {};

//returns new object and leaves original unchanged
function updateObjectWithKeyAndValue(obj, key, value){
     var newObj = Object.assign({}, obj)
     newObj[key] = value;
     return newObj;
}

//changes original object
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

//create new object, leaves original object intact
function deleteFromObjectByKey(obj, key){
    var newObj = Object.assign({}, obj);
    delete newObj.key;
    return newObj;
}

//change original object
function destructivelyDeleteFromObjectByKey(obj, key){
      delete obj.key;
      return obj;
}
