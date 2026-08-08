import mongoose from "mongoose";

const workingHoursSchema = new mongoose.Schema({
    barber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    dayOfWeek: {
        type: Number, // 0 = domingo, 1 = lunes...
        min: 0,
        max: 6,
        required: true
    },
    startTime: {
        type: String, // "09:00"
        required: true
    },
    endTime: {
        type: String, // "20:00"
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model('workingHours',workingHoursSchema)