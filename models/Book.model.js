const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
  },
  genre: {
    ref: "Genre",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
