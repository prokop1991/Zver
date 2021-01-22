const Dbconect = require("../services/Dbconect");
const tableName = 'users';

module.exports.getEmail =  function(value) {
 
  return user = Dbconect.qweryByValue(tableName, 'email', value)
}

module.exports.getIdModel =  function(id) {
 
  return user = Dbconect.executeById(tableName, id)
}


