import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    barber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    date: Date,

    startTime: String,

    endTime: String,

    status: {
        type: String,
        enum: ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"],
        default: "PENDING"
    }
});

export default mongoose.model('appointment',appointmentSchema)