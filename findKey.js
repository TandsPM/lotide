// scan the object and return the first key for which the callback returns a truthy value
// If no key is found, then it should return undefined

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
  return(key);
    }
  }
   return undefined;
}

module.exports = findKey;
