const Overvis = require("../services/Overvis");
const tableName = 'farmer';

// список ферм
module.exports.getAll = async function() {
    return await Overvis.getAllParams();
}

// список одной фермы
module.exports.getById = function(id) {
    return  Dbconect.qweryById(tableName, id)
}

//создание категории 
module.exports.insertBy = function(categorie) {
    return Dbconect.insert(tableName, categorie);
}

//обновление категории 
module.exports.updateBy = function(id, categorie) {
    return Dbconect.update(tableName, id, categorie);
}

//удаления категории 
module.exports.deletBy = function(id) {
    return Dbconect.delet(tableName, id);
}
