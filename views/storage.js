
const express = require("express")
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const {getItems, createItem, getItem,deleteItem} = require("../controllers/storage")
const {getValidation} = require("../validators/storage")



router.post("/",uploadMiddleware.single("myfile"),createItem)
router.get("/",getItems)
router.get("/:id",getValidation,getItem)
router.delete("/:id",getValidation,deleteItem)
module.exports = router