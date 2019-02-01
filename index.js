var recipes={}

function updateObjectWithKeyAndValue(object,key,value){
  return newObj=Object.assign({}, object, {[key]:value})
}
var obj={prop:1}
updateObjectWithKeyAndValue(obj,'prop2',2)

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value
}
