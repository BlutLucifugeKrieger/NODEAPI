const jsonwebtoken = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET


const tokenSign = async (user)=>{

    const sign =  jsonwebtoken.sign(

        {
            _id:user._id,
            role:user.role
        },
        JWT_SECRET,
        {
            expiresIn:"2h"
        }
    )
        return sign
}

const verifyToken = async (tokenJWT)=>{


    try {
        
        return jsonwebtoken.verify(tokenJWT,JWT_SECRET)

    } catch (error) {
        
        return null
    }

}


module.exports = {tokenSign,verifyToken}