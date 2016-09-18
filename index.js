var recipes = {}


function updateObjectWithKeyAndValue(object, key, value)
{
var object = { prop: '1' , prop2:'2'}
return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
   object.prop2 = '2'
return object
}

function deleteFromObjectByKey(object, key){

   return Object.assign({},object ,{prop:"1"})
  delete object.prop
  return object

}

function destructivelyDeleteFromObjectByKey(object, key)
{
delete object.prop
return object

}
