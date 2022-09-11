const Genre = require("../models/Genre.model");

module.exports.genresController = {
  addGenre: async (req, res) => {
    try {
      const genre = await Genre.create({
        name: req.body.name,
        info: req.body.info,
      });
      res.json(`Жанр ${genre.name} добавлен в коллекцию.`);
    } catch (e) {
      res.json("Возникла ошибка при добавлении жанра. Код ошибки:" + e);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      res.json("Жанр удален");
    } catch (e) {
      res.json("Возникла ошибка при удалении жанра. Код ошибки:/n" + e);
    }
  },
  getGenres: async (req, res) => {
    try {
      const genre = await Genre.find();
      res.json(genre);
    } catch (e) {
      res.json(e);
    }
  },
};
