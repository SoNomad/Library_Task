const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  book: {
    ref: "Book",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
