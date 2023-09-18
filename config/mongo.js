const res = require("express/lib/response");
const mongoose = require("mongoose");


const dbConnection = () =>{

    const dbConnection = process.env.URI_DB;
    mongoose.connect(dbConnection,{

        useNewUrlParser:true,
        useUnifiedTopology:true

    }).then(()=> console.log("****CONNECTION ESTABLISHED SUCCESFULLY****")).catch((err)=>{console.error(err)})

}

module.exports = dbConnection
