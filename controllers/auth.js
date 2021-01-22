const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../modules/User')

module.exports.login = async function(req, res){
   
    const condidat = await User.getEmail(req.body.email);
    const password = req.body.password
    
//Пользователь найден
    if(condidat){
        if(condidat['password'] == password)
        {
            //совподенее поролей
            const token = jwt.sign({
                email: condidat['email'],
                userId: condidat['id']
            }, keys.jwt, {expiresIn: 60 * 60})
            res.status(200).json({
                token: `Bearer ${token}`    
             })
        }else{
        res.status(401).json({
            massang: "Неверный пороль!"   
         })}
    }else{
        //Нет совподение по Email
        res.status(404).json({
              massang: "Пользователь не найден!",
        })             
    }
}
module.exports.register = function(req, res){
    res.status(200).json({
        register: 'regist'
    })
}