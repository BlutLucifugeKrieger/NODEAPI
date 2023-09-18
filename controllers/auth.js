const { matchedData } = require("express-validator")
const { usersModels } = require("../models")
const { handleHttpError } = require("../utils/handleError")
const { encrypt , compare} = require("../utils/handlePassword")
const {tokenSign} = require("../utils/handleJwt")




const registerUser =  async (req,res)=>{

    try {
        
        const body = matchedData(req)
        const hashedPass = await encrypt(body.password)
        const finalPass = {...body,password:hashedPass}
        const dataUser = await usersModels.create(finalPass)

        
        const tokenData={

            token: await tokenSign(dataUser),
            user: dataUser
        }
        
        res.send({tokenData})

    } catch (error) {
        
        handleHttpError(res,'Error creating a user')

    }


}



const loginUser = async (req,res)=>{

    try {
        
        const body = matchedData(req)
        const userEmail = body.email
        
        const user = await usersModels.findOne({email:userEmail})
        
        if(!user){

            handleHttpError(res,'User not exist',404)
            return
        }

        const hashPassword = user.get('password')
        const check = await compare(body.password, hashPassword);
        
        
        if(!check){

            handleHttpError(res,'Invalid password',401)
            return
        }

        user.set('password', undefined,{strict:false})
        const data = {

            token: await tokenSign(user),
            user
        }
        // Almacenar el token en sessionStorage
        //sessionStorage.setItem('token', data.token);
        
        res.send({data})

    } catch (error) {

        handleHttpError(res,'Loging error')
        
    }
   
}



const getUsers= async (req,res)=>{


    
    const data = await usersModels.find({})
    res.send(data)

}



const getUserWithDetails = async (req,res)=>{

    try {
        
        const body = matchedData(req)
        const userEmail=body.email
        const data = await usersModels.findOne({email:userEmail})
        res.send({data})

    } catch (error) {
        
        handleHttpError(res,'Error getting a user with details')
    }
    
}

const getUserToken = async (req, res) => {
    try {
      // Obtén el token de la solicitud (de acuerdo a tu implementación)
      const token = req.headers.authorization()
        c
      // Verifica si el token es válido (puedes usar tu función verifyToken aquí)
      const tokenData = await verifyToken(token);
  
      if (!tokenData._id) {
        handleHttpError(res, 'Token inválido', 401);
        return;
      }
  
      // Ahora que tienes el token válido, obtén los detalles del usuario
      const { id } = matchedData(req);
      console.log(`El valor de la ID es ${id}`);
  
      // Realiza la búsqueda del usuario
      const data = await usersModels.findById(id);
  
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al obtener un usuario con detalles');
    }
  };
  


module.exports = {registerUser,loginUser,getUsers,getUserWithDetails,getUserToken}