const express = require("express")
const fs = require("fs")
const router = express.Router()


const PATH_ROUTES = __dirname // ABSOLUTE PATH

const removeExtension = (fileName)=>{

    return fileName.split(".").shift()
}

const funct = fs.readdirSync(PATH_ROUTES).filter((file)=>{

    const name = removeExtension(file)

    if(name !== 'index'){

        router.use(`/${name}`,require(`./${file}`))
    }

})




module.exports = router