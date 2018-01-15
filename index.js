var recipes = new Object();

updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

updateObjectWithKeyAndValue('recipes', 'Shrimp Egg Foo Young', 'Classic');
