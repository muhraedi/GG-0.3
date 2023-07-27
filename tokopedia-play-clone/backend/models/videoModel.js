import { mongoose } from "mongoose";

import { productSchema } from "./productModel.js";

const videoSchema = new mongoose.Schema({
    urlImageThumbnail: {
        required: true,
        type: String
    },
    products: [productSchema]
})

export default mongoose.model('Video', videoSchema);