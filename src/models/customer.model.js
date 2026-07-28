 import mongoose from "mongoose";

 const customerSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required : true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    birthday:{
        type: Date
    },
    description:{
        type: String
    },
    level:{
        type: String
    } 
 },{
    timestamps: true
})

export default mongoose.model("Customer", customerSchema)