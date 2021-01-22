const JwtStrategy = require('passport-jwt').Strategy;
const   ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../modules/User')
const keys = require('../config/keys')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:  keys.jwt
}


module.exports = function(passport){
    passport.use(
        new JwtStrategy(options, async (jwt_payload, done)=>{
            try{
                const condidate = await UserModel.getIdModel(jwt_payload.userId)
                
                if(condidate){
                    const user =  {id: condidate.id, email: condidate.email}
                    done(null, user)
                }else{
                    done(null, false)
                }
            } catch(e) {
                console.log(e)
            }

        })
    )
}
/*
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));*/