import mongoose from 'mongoose'

const userSchema = new mongoose.Schema ({
    username:{
        type: String,
        required : true,
        trim : true  
    },
    name:{
        type : String,
        required : true,
        trim : true   
    },
    lastName:{
        type: String,
        required:true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required : true
    }
},{
    timestamps: true
})

export default mongoose.model('User',userSchema)