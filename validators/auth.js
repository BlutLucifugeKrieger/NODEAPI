
const {check} = require("express-validator")

const validateResults = require("../utils/handleValidator")



const validationCreateUser=[

    check("name").exists().isLength({min:5,max:20}),
    check("age").exists().notEmpty().isNumeric(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().isLength({min:5,max:16}),
    check("role").exists().notEmpty(),

    (req,res,next)=>{

        validateResults(req,res,next)
    }

]



const validationLoginUser= [

    check("email").exists().notEmpty().isEmail(),
    check("password").exists().isLength({min:5,max:16}),

    (req,res,next)=>{

        validateResults(req,res,next)
    }

]

const validatorGetUserWithDetails=[

    check("email").exists().notEmpty().isEmail(),

    (req,res,next)=>{

        validateResults(req,res,next)
    }
]

module.exports = {validationCreateUser,validationLoginUser,validatorGetUserWithDetails}



