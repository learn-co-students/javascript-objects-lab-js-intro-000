var recipes = {leves: 'víz, só és bors',
                főétel: 'hal és konzerv',
                desszert: 'csokitorta',
                  megjegyzés: 'Tudom, hogy ez nem recept!'}

function updateObjectWithKeyAndValue(object, key, value) {return Object.assign({}, object, {[key]: value})}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {return Object.assign(object, {[key]: value})}

function deleteFromObjectByKey(object, key) {var copy = Object.assign({}, object);
                                                    		delete copy.key; return copy}
