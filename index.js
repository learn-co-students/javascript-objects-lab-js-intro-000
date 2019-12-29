var recipies = {};

function updateObjectWithKeyAndValue(object, key, value) // these arguements are just placeholders, and how you would code functions anyway, to later take a real variable in. In the context of being a tutorial, the test has variables that it takes in to see if the function was written properly or not. In real life, I would need to create/define those variables outside of these functions and then call the functions whilist specifying which variables I wanted to use. Functions are meant to be modular. 
{
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
object[key] = value;
return object;
}

function deleteFromObjectByKey(object, key)
{
  var clone = Object.assign({}, object)
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
  delete object[key];
  return object;
}

// When defining a function, when an arguement 'x' is passed in, within the function, that variable 'x' will be used. 'x' is a placeholder for when you later call a function and pass a more specific argument in. Example- function dothingit(cat) and then all the x's will be the cat variable. 