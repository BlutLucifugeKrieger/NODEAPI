const express = require("express")
const router = express.Router()
const {validationCreateUser,validationLoginUser,validatorGetUserWithDetails} = require("../validators/auth")
const {registerUser, loginUser,getUsers,getUserWithDetails,getUserToken} = require("../controllers/auth")
const { authMiddleware } = require("../middleware/sessions")




router.post("/register",validationCreateUser,registerUser)
//router.post("/login",)
router.post("/login",validationLoginUser,loginUser)
router.get("/",getUsers)
router.get("/token/:id",getUserToken)
router.get("/login/:email",validatorGetUserWithDetails,getUserWithDetails)
module.exports = router
