

var recipes = {item: 'quantity'};


function updateObjectWithKeyAndValue(recipes, item, quantity){

  return Object.assign({},recipes,{[item]: quantity })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, item, quantity) {

  recipes[item] = quantity;
  return recipes;

}

function destructivelyDeleteFromObjectByKey(recipes, item) {
 delete recipes[item];
 return recipes;

}

function deleteFromObjectByKey(recipes, item) {

  var res = Object.assign({},recipes);
  delete res[item];
  return res;

}
