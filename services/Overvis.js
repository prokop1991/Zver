const request = require('request-promise')
const overvisConfig = require('../config/overvis.config')
require('date')
/*

request('http://example.com/api', (err, response, body) => {
       if(err)
         return res.status(500).send({message: err});



*/
class Overvis {
    
     auth = null

    constructor(request, overvisConfig){
       this.request = request
       this.config = overvisConfig
    }

    async authorization(){
        const qwery = this.config.host+'/authenticate/'
        try{
            this.auth =  await  this.request.post({
                url: qwery,
                headers: {'Content-Type': 'application/json'},
                json: true,
                body: {'apiKey': this.config.key }
            })
            return true
        } catch(e){
            this.logout()
            return false
        }
   }
   logout(){
       this.auth = null;
   }

   async qwery(qwery, data) {
    let f_auth

       if(!this.auth){
           f_auth = await this.authorization()
       }else{f_auth = true}

       if(f_auth){
        return  await  this.request.get({
             url: qwery,
             headers: {'Content-Type': 'application/json', 'Authorization': 'token '+this.auth.token},
             json: true,
             body: data
         })
      }else{
          this.logout()
          return false
         }
   }

   async getAllParams(){
       const qwery = this.config.host+"/org/459/nets/device-param-tree/"
       return await this.qwery(qwery,{});
   }

}


module.exports = Overvis = new Overvis(request,overvisConfig);
