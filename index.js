var recipes={};

function updateObjectWithKeyAndValue(object, key, value){
   var obj = Object.assign({},object,{[key]:value});

   return obj
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object=Object.assign(object,{[key]:value})
  return object
}

function deleteFromObjectByKey(object, key){
   var obj=Object.assign(object);
   return obj
}

function  destructivelyDeleteFromObjectByKey(object, key){
  delete Object.assign(object,object[key])
  return object


}
