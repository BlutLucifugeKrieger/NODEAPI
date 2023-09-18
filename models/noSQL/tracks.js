

const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")
const tracksScheme = mongoose.Schema(


    {
        album:{type:String},
        name:{type:String},
        cover:{type:String},
        band:{
                name:{type:String},
                country:{type:String},
            },
        duration:{

            start:{type:Number},
            end:{type:Number}
        },

        mediaId:{type: mongoose.Types.ObjectId}
    },
    
    {
        timestamps:true,
        versionKey:false
    }


)

    tracksScheme.plugin(mongooseDelete,{overrideMethods: "all"})
    module.exports = mongoose.model("tracks",tracksScheme)
    