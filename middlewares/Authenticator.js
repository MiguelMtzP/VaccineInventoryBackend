const User = require('../models/User');
const passport= require("passport")
const config = require("../config/config")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.secretKey;

passport.use(new JwtStrategy(opts, async(jwt_payload, done) =>{
  try {
    let user = await User.findOne({_id: jwt_payload._id});
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
    
  } catch (error) {
    return done(error, false); 
  }
}));

module.exports = passport;