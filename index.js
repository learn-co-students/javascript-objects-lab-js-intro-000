function updateObjectWithKeyAndValue(object, key, value) {
	return {key, value}, {key, value};
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
	return {key, value};
}

function deleteFromObjectByKey(object, key) {
  delete key;
	return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete key;
	return object;
}
