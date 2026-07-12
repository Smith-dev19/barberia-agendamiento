import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost/barberdb')
        console.log("DB is conected")
    } catch (error) {
        console.log(error)
    }
}