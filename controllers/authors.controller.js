const Author = require("../models/Author.model");

module.exports.authorsController = {
  addAuthor: async (req, res) => {
    try {
      const author = await Author.create({
        name: req.body.name,
        bio: req.body.bio,
      });
      res.json(`Автор ${author.name} добавлен`);
    } catch (e) {
      res.json("Возникла ошибка при добавлении автора. Код ошибки:/n" + e);
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      await Author.findByIdAndRemove(req.params.id);
      res.json("Автор удален");
    } catch (e) {
      res.json("Возникла ошибка при удалении автора. Код ошибки:/n" + e);
    }
  },
  getAuthors: async (req, res) => {
    try {
      const author = await Author.find();
      res.json(author);
    } catch (e) {
      res.json(e);
    }
  },
};
