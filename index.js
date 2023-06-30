var recipes = new Object({});

/*non destructively */
function updateObjectWithKeyAndValue (object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, obj, {[key]:value});
}

//destructively//

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    var obj = { prop: 1 }
      object[key]= value;
        return object

}


function deleteFromObjectByKey(object, key){
  var obj = { object: key };
  var newObj = Object.assign({}, obj);
    delete newObj.key;
      return newObj;

}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
    return object;
}
