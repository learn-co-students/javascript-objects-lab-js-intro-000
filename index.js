var recipes = {prop: 1};


function updateObjectWithKeyAndValue(object, ingredient, amount){
    var newRecipes = Object.assign(object,{[ingredient]:amount});

    return newRecipes;
}


function destructivelyUpdateObjectWithKeyAndValue(object, ingredient, amount){
    object[ingredient] = amount;

    return object;
}

function deleteFromObjectByKey(object, ingredient) {
    var newRecipes = Object.assign({},object);
    delete newRecipes[ingredient];

    return newRecipes;
}

function destructivelyDeleteFromObjectByKey (object, ingredient) {
    delete object[ingredient];

    return object;
}
