const {check, validationResult} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validationCreateItem = [

    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("band").exists().notEmpty(),
    check("band.name").exists().notEmpty(),
    check("band.country").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    
    (req,res,next)=>{

        return validateResults(req,res,next)
    }
]

const validationGetItem = [

    check("id").exists().notEmpty().isMongoId(),

    (req,res,next)=>{

        return validateResults(req,res,next)
    }
]









module.exports = {validationCreateItem,validationGetItem}