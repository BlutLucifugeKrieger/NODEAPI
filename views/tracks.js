const express = require("express")

const router = express.Router()

const {getItems, getItem,createItem,updateItem,deleteItem} = require("../controllers/tracks")
const {validationCreateItem,validationGetItem} = require("../validators/tracks")
const {authMiddleware} = require("../middleware/sessions")
const customHeaders = require("../middleware/customHeader")

//TODO http://localhost/GET,POST,DELETE,PUT

router.get("/",authMiddleware,getItems)
router.get("/:id",validationGetItem,getItem)
router.post("/",validationCreateItem,createItem)
router.put("/:id",validationGetItem,validationCreateItem,updateItem)
router.delete("/:id",validationGetItem,deleteItem)

module.exports = router