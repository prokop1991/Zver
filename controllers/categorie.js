const categorieModel = require('../modules/Categorie')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res){

    try{
    const categories = await categorieModel.getAll();
    res.status(200).json({
        categories: categories
    })
    }catch(e){
        errorHandler(res, e)
    }
}
module.exports.getById = async function(req, res){
    try{
        const categories = await categorieModel.getById(req.params.idcat);
        res.status(200).json({
            categories: categories
        
        })
    }catch(e){
        errorHandler(res, e)
    }
}
module.exports.remove = async function(req, res){

    try{
        const id = await categorieModel.deletBy(req.body.id);
        res.status(200).json({
            messeng: "Категория успешно удалена"
        })
    }catch(e){
        errorHandler(res, e)
    }
   
}
module.exports.create = async function(req, res){

    const categorie = {
        name: req.body.name, 
        parent: req.body.parent,
        img: req.file ? req.file.path : ''
    }

    try{
        const id = await categorieModel.insertBy(categorie);
        categorie.id = id;
        res.status(200).json({
            insert: categorie
        })
    }catch(e){
        errorHandler(res, e)
    }

}
module.exports.update = async function(req, res){
    
    const categorie = {id: req.body.id, name: req.body.name}
    
    if(req.file){
        categorie.img = req.file.path
    }

    try{
        const respons = await categorieModel.updateBy(categorie.id, categorie);
        res.status(200).json({
            update: categorie,
            ress: respons
        
        })
    }catch(e){
        errorHandler(res, e)
    }
   
}