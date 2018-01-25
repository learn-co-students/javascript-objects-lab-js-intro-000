var recipes = new Object();
recipes['pancake'] = 'flour'

function updateObjectWithKeyAndValue(obj,key,value) {
  return Object.assign({},obj,{[key]:value});

}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
   obj[key] = value;
   return obj;
}
// woot

function deleteFromObjectByKey(obj,key){
  var recipe2 = Object.assign({},obj);
  delete recipe2[key];
  return recipe2;
}

//woot

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key];
  return obj;
}
