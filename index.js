var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
  // returns object with original key - value pairs and new key - value pair
  return Object.assign({}, object, {[key: value]})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key]=value;
  return object;
}

function deleteFromObjectByKey (object , key)
{ //deletes key from clone object and returns new object
  var clone = Object.assign({},object)
  delete clone[key];
  return clone;
  return key;
  }

  function destructivelyDeleteFromObjectByKey (object, key)
  {
    delete object[key];
    return object;
  }


function
