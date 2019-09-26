function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

var recipes = {prop: 1};

updateObjectWithKeyAndValue(recipes, 'prop2', 2)
