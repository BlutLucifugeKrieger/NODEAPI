const { matchedData } = require("express-validator")
const {storageModels} = require("../models")
const { handleHttpError } = require("../utils/handleError")
const publicURL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`
const fs = require("fs")

const getItems = async (req,res) =>{ 

    try {
        
        const data = await storageModels.find({})
        res.send({data})

    } catch (error) {
        
        handleHttpError(res,'Error getting all the files')
    }

    
}
const getItem = async (req,res)=>{


    try {
        
        const {id} = matchedData(req)
        const data = await storageModels.findById(id)
        res.send({data})

    } catch (error) {
        
        handleHttpError(res,'Error getting a file')
    }

    

}
const createItem = async (req,res)=>{


    try {
        const {body,file} = req
        console.log(file)
        const fileData = {
            filename: file.filename,
            url: `${publicURL}/${file.filename}`

    }
    const data = await storageModels.create(fileData)
    res.send({data})
    } catch (error) {

        handleHttpError(res,'Error creating a file')
        
    }
    
}
const updateItem = (req,res)=>{}

const deleteItem = async (req,res)=>{

    try {
        
        const {id} = matchedData(req)
        const data = await storageModels.delete({_id:id})
        const {url} = data; 
        console.log(`la url a eliminar es: ${url}`)
        

        res.send({data})

    } catch (error) {

        handleHttpError(res,'Error deleting an item')
        
    }


}






module.exports = {getItems,getItem,createItem,updateItem,deleteItem}