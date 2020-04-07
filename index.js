function updateObjectWithKeyAndValue(object,key,value){
  let newObj= Object.assign({},object,{[key]:value});
  return newObj;
};

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]= value;
  return object
};

function deleteFromObjectByKey(object,key){
  return delete object.key;
};

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return Object;
};
