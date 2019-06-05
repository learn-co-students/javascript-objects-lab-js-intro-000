var recipes = {
  'pasta': "Chicken Alfredo",
  seafood: "Lobster",
  salad: "Caesar Salad"
};


function updateObjectWithKeyAndValue (object, key, value){
  Object.assign({}, object, key, value);
  return recipes;
}
