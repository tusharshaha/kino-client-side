import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    userImg: String,
    email: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true,
    },
    revDate: {
        type: String,
        required: true,
    }
})

const ReviewModel = mongoose.model("Reviews", reviewSchema);

export default ReviewModel;