var recipes = {
  'pasta': "Chicken Alfredo",
  seafood: "Lobster",
  salad: "Caesar Salad"
};


function updateObjectWithKeyAndValue (object, key, value){
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}
updateObjectWithKeyAndValue({prop: 1}, 'prop 2', 2);


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

}
