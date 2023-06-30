var recipes = {
  flour: '2 cups',
  eggs: 3,
  butter: '1/2 stick'
}

function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, {[ key]: value })
}

 
function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
  // it's important that we merge everything into
  // a new object such as the empty {}. 
    // Otherwise, the object obj will be modified. 
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })
 
const recipe = { milk: 3 }
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup', 'flour', '2 cups', 'butter', '1/2 stick')
 
recipe // { eggs: 3 }



function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
 
{
const recipesds = { fart: 3 };
 
destructivelyUpdateObjectWithKeyAndValue(recipesds, 'chocolate', '1 cup', 'flour', '2 cups', 'butter', '1/2 stick')

recipe 

}



var recipes = {
  flour: '2 cups',
  eggs: 3,
  butter: '1/2 stick'
};

function deleteFromObjectByKey(obj, key) {
delete recipe.flour;

recipes; 
}


// function deleteFromObjectByKey(obj, key) {
//   delete recipe['eggs']

// recipes;
// }

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  
  return obj;
  
  
}


function deleteFromObjectByKey(obj, key) {
  return Object.assign({}, obj[key])
}
 
const drawers = { big: 3 };
 
deleteFromObjectByKey(drawers, 'small', '1'); {
  delete obj[key]
 
}













