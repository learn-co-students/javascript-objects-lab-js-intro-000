var recipes ={};

var updateObjectWithKeyAndValue=(obj,key,value)=>
Object.assign({},obj,{[key]:value});

var destructivelyUpdateObjectWithKeyAndValue=(obj,key,value)=>
{obj[key]=value; return obj;}

var deleteFromObjectByKey =(obj,key) =>{
  var newObj =Object.assign({},obj);
   return delete newObj.key;

}
var destructivelyDeleteFromObjectByKey =(obj,key) =>
 {delete obj[key]; return obj;}


obj;
