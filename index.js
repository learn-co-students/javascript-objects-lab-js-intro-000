var recipes = {"Ingredient1":"Eggs", "Ingredient2":"Butter", "Ingredient3":"Flour"}
function updateObjectWithKeyAndValue(object, key, value){return Object.assign({}, object, {[key]:value})}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){object[key] = value; return object}
function deleteFromObjectByKey(object, key){var newObj = Object.assign ({}, object); delete newObj[key]; return newObj}
function destructivelyDeleteFromObjectByKey(object, key) {return delete object[key]}
