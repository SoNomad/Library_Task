const Book = require("../models/Book.model");

module.exports.booksController = {
  //добавление книги
  addBook: async (req, res) => {
    const { name, author, genre } = req.body;
    try {
      const book = await Book.create({
        name,
        author,
        genre,
      });
      res.json(`Книга ${book.name} добавлена в коллекцию.`);
    } catch (e) {
      res.json("Возникла ошибка при добавлении книги. Код ошибки:/n" + e);
    }
  },
  //удаление книги
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndRemove(req.params.id);
      res.json("Новость удалена");
    } catch (e) {
      res.json(e);
    }
  },
  //редактирование книги
  editBook: async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.params.id, req.body);
      res.json("Изменения сохранены");
    } catch (e) {
      res.json("Возникла ошибка при редактировании книги. Код ошибки:/n" + e);
    }
  },
  //вывод определенной книги
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
  //вывод всех книг
  getBooks: async (req, res) => {
    try {
      const book = await Book.find().populate("author genre", "name");
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
  // вывод всех книги из определенного жанра
  getBookByGenre: async (req, res) => {
    try {
      const book = await Book.find({ genre: req.params.id });
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
};
