require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const dbConnection = require("./config/mongo")
const port = process.env.PORT || 3000
const morganBody = require("morgan-body")

app.use(cors())
app.use(express.json())
morganBody(app,{})



app.use("/api",require("./views"))
app.use(express.static("storage"))

app.listen(port, () =>{

    console.log(`Hail satan from http://localhost:${port}`)
})

dbConnection()