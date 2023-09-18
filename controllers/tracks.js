
const { matchedData } = require("express-validator")
const {tracksModels} = require("../models")

const {handleHttpError} = require("../utils/handleError")
const tracks = require("../models/noSQL/tracks")

const getItems = async (req,res) =>{ 

    try {
        
        const user = req.user
        const data = await tracksModels.find({})
        res.send({data,user})

    } catch (error) {
        
        handleHttpError(res,'Error getting items')
    }

    
}
const getItem = async (req,res)=>{

    try {
        
        req = matchedData(req)
        const {id} = req
        const data = await tracksModels.findById(id)
        res.send({data})
        
    } catch (error) {
        
         handleHttpError(res,'Error getting an item')
    }


}
const createItem = async (req,res)=>{

    try {
        
        const body  = matchedData(req)
        const data = await tracksModels.create(body)
        res.send({data})

    } catch (error) {
        
        handleHttpError(res,'Error creating an item')
    }

    
}
const updateItem = async (req,res)=>{

    try {
        
        const {id} = req.params
        const body = req.body
        console.log(`ID TO UPDATE: ${id}`)
        const data = await tracksModels.findOneAndUpdate({_id:id}, body,{new:true})
        
        res.send({data})

    } catch (error) {
        
        handleHttpError(res,'Error updating an item')
        
    }

}
const deleteItem = async (req,res)=>{


    try {
        
            req = matchedData(req)
            const {id} = req
            console.log("ID a eliminar:", id);
            const data = await tracksModels.delete({_id:id})
            res.send({data})

    } catch (error) {
        
        handleHttpError(res,'Error deleting an item')
    }
}






module.exports = {getItems,getItem,createItem,updateItem,deleteItem}