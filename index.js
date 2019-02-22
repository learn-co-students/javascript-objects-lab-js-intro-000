

var recipes = {};

function updateObjectWithKeyAndValue(o, k, v) {
  var r = {};
  r[k] = v;
  return Object.assign( {}, o, r );
}

function destructivelyUpdateObjectWithKeyAndValue(o, k, v) {
  o[k] = v;
  return o;
}

function deleteFromObjectByKey(o, k){
  var r = {};
  Object.assign( r, o );
  delete r[k];
  return r;
}

function destructivelyDeleteFromObjectByKey(o, k){
  delete o[k];
  return o;
}
