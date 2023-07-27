import { mongoose } from "mongoose";

const commentSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },
    comment: {
        required: true,
        type: String,
    },
    videoId: mongoose.Types.ObjectId
}, { timestamps: true })

export default mongoose.model('Comment', commentSchema);