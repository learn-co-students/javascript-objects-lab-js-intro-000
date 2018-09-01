var recipes = {prop: "1"};

function updateObjectWithKeyAndValue (object,key,value) {
return Object.assign({},recipes, {prop:'1'}, {prop2:'2'})
}
var object = {prop: 1};
function destructivelyUpdateObjectWithKeyAndValue (object,key,value) {
  object['prop2'] = '2';
  return object
}

var obj ={prop: 1};
function deleteFromObjectByKey (object, key) {
  var newObj = Object.assign({}, obj);
  delete newObj.prop;
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
