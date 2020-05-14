var updateObjectWithKeyAndValue = (object, key, value) => {return Object.assign({}, object, { [key]: value})}
var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {object[key] = value; return object}
var deleteFromObjectByKey = (object, key) => {Object.assign({}, object); return delete deleteFromObjectByKey.key}
var destructivelyDeleteFromObjectByKey = (object, key) => {return (delete object[key])}
