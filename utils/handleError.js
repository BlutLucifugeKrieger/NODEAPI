
const handleHttpError= (res,message='something happend', code = 403)=>{

    res.status(code)
    res.send({error: message})

}






module.exports = {handleHttpError}