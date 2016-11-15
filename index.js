var recipes = {'breakfast': "oatmeal"}

function updateObjectWithKeyAndValue(obj, key, value) {
  // it's important that we merge everything into
  // a new object
  return Object.assign({}, obj, { [key]: value })
}

const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`

recipe // { eggs: 3 }

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}


function deleteFromObjectByKey(object,key)
{
  return Object.delete({}, obj, { [key]: value })
}

function destructivelyDeleteFromObjectByKey(object,key)
{
  delete object[key];
  return object;
}
