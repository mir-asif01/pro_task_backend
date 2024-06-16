import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        userEmail: String,
        userName: String,
        review: String,
        starCount: Number
    },
    { timestamps: true }
)

export const Review = mongoose.model("Review", reviewSchema)