function updateObjectWithKeyAndValue(o,k,v){
  return o=Object.assign({},o,{[k]:v})
}
function destructivelyUpdateObjectWithKeyAndValue(o,k,v){
  o[k]=v
  return o
}
function deleteFromObjectByKey(o,k){
  var n=Object.assign({},o)
  delete n[k]
  return n
}
function destructivelyDeleteFromObjectByKey(o,k){
  delete o[k]
  return o
}
