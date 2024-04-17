const mongoose = require("mongoose")

const data_schema = mongoose.Schema({
 
    name:{
        type:String,
        required : true,
    },

    email:{
        type:String,
        required : true,
    },
    password:{
        type:String,
        required : true,
    }
})

module.exports = mongoose.model("Student_collection_router",data_schema)

// studebt collection === collection name 





