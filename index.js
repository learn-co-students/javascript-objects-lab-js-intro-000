var recipes = {
  first: 'salt',
  second: 'shugar',
  third: 'milk',
  fourth: 'flour'
}


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value});
return {};
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var object2 = Object.assign({}, object);
  delete object2[key];
  return object2;
}

function destructivelyDeleteFromObjectByKey(object, key){
    delete object[key];
    return object;
}
