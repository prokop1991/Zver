const Farm = require('../modules/Farm')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async function(req, res){

    try{
        const qwery = await Farm.getAll()
        res.status(200).json(qwery)
    } catch(e){
        //e.message = "Овервис не подключен"
        errorHandler(res, e)
    }



 
   
}
module.exports.getById = function(req, res){
   
}
module.exports.remove = function(req, res){
   
}
module.exports.create = function(req, res){
   
}
module.exports.update = function(req, res){
   
}