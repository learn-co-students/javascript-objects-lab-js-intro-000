var recipes = new Object()//{ breakfast: 'oatmeal' });

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  const newObj = Object.assign({}, object)//, { [key]: value })
    delete newObj[key]   
    return newObj
}

//works
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}

