var recipes={};

function updateObjectWithKeyAndValue(obj, key, value)
{

   obj[key]=value;
    return obj;

}

function updateObjectWithKeyAndValue(obj, key, value)
{

   var newObj=Object.assign({},obj);
   newObj[key]=value;
    return newObj;

}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value)
{
  obj[key]=value;
   return obj;
}



function deleteFromObjectByKey(obj, key)
{
    var newObj=Object.assign({},obj);
    delete newObj[key];
    return newObj;
}

function deleteFromObjectByKey(obj, key)
{
  var newObj=Object.assign({},obj);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromObjectByKey(obj, key)
{
    obj=new Object();

    return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key)
{
  obj[key]=undefined;


  return obj;
}
