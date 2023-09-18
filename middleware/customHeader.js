

const customHeaders =(req,res,next)=>{

   try {

    const apiKey = req.headers.api_key
    if(apiKey === 'Satan-666'){

        next()
    }else{

        res.status(403)
        res.send({error:"UNVALID API KEY"})
    }
    
   } catch (error) {

        res.status(403)
        res.send({error: "CUSTOM HEADER ERROR"})
   }

}

module.exports= customHeaders