var recipes= {cake:"apple"}
function updateObjectWithKeyAndValue(recipes, key, value) {var newrecipes=Object.assign ({[key]:value},recipes);return newrecipes}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {recipes[key]=value; return recipes}
function deleteFromObjectByKey(recipes, key) {var newrecipes=Object.assign({},recipes); delete newrecipes.key; return newrecipes}
function destructivelyDeleteFromObjectByKey(recipes, key) {delete recipes.key; return recipes}