const Review = require("../models/Review.model");

module.exports.reviewsController = {
  addReview: async (req, res) => {
    try {
      const { text, author, book } = req.body;
      const review = await Review.create({
        text,
        author,
        book,
      });
      res.json("Рецензия добавлена");
    } catch (e) {
      res.json("Возникла ошибка при добавлении рецензии. Код ошибки:/n" + e);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id);
      res.json("Рецензия удалена");
    } catch (e) {
      res.json("Возникла ошибка при удалении рецензии. Код ошибки:/n" + e);
    }
  },
  getReviews: async (req, res) => {
    try {
      const review = await Review.find().populate("book", "name");
      res.json(review);
    } catch (e) {
      res.json(e);
    }
  },
};
