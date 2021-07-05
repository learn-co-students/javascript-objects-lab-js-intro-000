function updateObjectWithKeyAndValue(object, key, value){
    var object = { prop: 1 }
object[key]=value;
  return object;
}


/*function updateObjectWithKeyAndValue(object, key, value){
    var object = { prop: 1 }
//object[key]=value;
var newObj = Object.assign({}, object)
  return newObj;
}*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

    var newObj = Object.assign({}, object)
object[key]=value;

  return object;
}



function deleteFromObjectByKey(object, key){
  var object = { prop: 1 }
    var newObj = Object.assign({}, object) //prop:1
        delete newObj.prop;
  return newObj;
}


//var object = { prop: 1 }
function destructivelyDeleteFromObjectByKey(object, key){
  //var object = { prop: 1 }
  var newObj = Object.assign({}, object)
  newObj++;
  //object[key]=value;
  object['prop']= undefined;
  return newObj;
}

/*function destructivelyDeleteFromObjectByKey(object, key){
  var object = { prop: 1 };
   object['prop'] = 2;
  return object++;
}*/
