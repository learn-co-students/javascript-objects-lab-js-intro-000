
function updateObjectWithKeyAndValue (a,b,c) {
    var newObj = Object.assign({}, a, { [b]: c });
    return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(a, b, c) {
    a[b] = c;
    return a;
};

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;

function destructivelyDeleteFromObjectByKey(a,b) {
  delete a[b];
  return a;
}
