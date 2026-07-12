import mongoose from 'mongoose'

const userSchema = mongoose.Schema ({
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
    phone:{
        type: Number,
        required : true,
        trim: true
    },
    password:{
        type: String,
        required : true
    }

})

export default mongoose.model('User',userSchema)