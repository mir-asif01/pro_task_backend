import { Review } from "../models/review.model.js"

const addReview = async (req, res) => {
    try {
        const review = req.body
        const result = await Review.create(review)
        res.send(result)
    } catch (error) {
        console.log(error)
    }

}

const getAllReviews = async (req, res) => {
    try {
        const allReview = await Review.find()
        res.send(allReview)
    } catch (error) {
        console.log(error);
    }
}

export { addReview, getAllReviews }