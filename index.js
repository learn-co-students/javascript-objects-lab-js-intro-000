var recipes = {
  'recipe 1': "This is recipe 1",
  'recipe 2': "This is recipe 2",
  'recipe 3': "This is recipe 3",
  'recipe 4': "This is recipe 4"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, key, value);
  return newObj;
}
