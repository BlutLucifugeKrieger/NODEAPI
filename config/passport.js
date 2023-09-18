const passport = require("passport")
const localPassport = require("passport-local").Strategy

passport.use(new LocalStrategy({

    usernameField: "email"

}, async (email,password,done)=>{

    

}))