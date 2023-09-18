const { usersModels } = require("../models")
const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")


const authMiddleware = async (req,res,next)=>{

    try {
        

        if(!req.headers.authorization){

            handleHttpError(res,'NOT TOKEN',401)
            return
        }

        const token = req.headers.authorization.split(" ").pop()
        const dataToken = await verifyToken(token)

        if(!dataToken._id){

            handleHttpError(res,'ERROR ID TOKEN',401)
            return 
        }
        
        const user = await usersModels.findById(dataToken._id)
        req.user = user
        next()

    } catch (error) {

        handleHttpError(res,'Error you do not have permissions')
    }
}

module.exports = {authMiddleware}