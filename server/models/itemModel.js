import mongoose from "mongoose";

//Creating Schema for review
const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
}, {
    timestamps: true
})

//creating thing model and defining all the fields for thing!
const itemSchema = mongoose.Schema({//mongoose.Schema({fields}, {timestamp});
    user: {
        type: mongoose.Schema.Types.ObjectId,//It is the relationship between user and the things
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    inStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Item = mongoose.model("Item", itemSchema);
export default Item;