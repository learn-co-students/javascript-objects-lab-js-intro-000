var recipes = { cereal: "milk , captain crunch", dinner :"rice,bean, tostones, tomatoes"}

function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(object, key){

	var newobj = Object.assign({},object);
	delete newobj[key];
	return newobj;
}

function destructivelyDeleteFromObjectByKey(object, key){

delete object[key];
return object;

}
