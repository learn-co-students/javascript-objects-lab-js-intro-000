var recipes={breakfast:"eggs"};

function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
    var temporaryObj=Object.assign({},object);
    delete temporaryObj[key];
    return temporaryObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
    delete object[key];
    return object;
}
