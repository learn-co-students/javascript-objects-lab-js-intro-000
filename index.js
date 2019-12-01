var dinner = {table01: 1}

function updateObjectWithKeyAndValue (dinner, table02, value){
  return Object.assign({}, dinner, {[table02]: value})
}

function destructivelyUpdateObjectWithKeyAndValue (dinner, table02, value){
   dinner[table02] = value
   return dinner
}

function deleteFromObjectByKey (dinner, table01){
  var dinner02 = Object.assign({}, dinner)
  delete dinner02[table01]
  return dinner02
}

function destructivelyDeleteFromObjectByKey (dinner, table01){
  delete dinner[table01]
  return dinner
}
