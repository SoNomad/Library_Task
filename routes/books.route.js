const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");
const router = Router();

router.post("/books", booksController.addBook);
router.delete("/books/:id", booksController.deleteBook);
router.patch("/books/:id", booksController.editBook);
router.get("/books/:id", booksController.getBookById);
router.get("/books", booksController.getBooks);
router.get("/books/genre/:id", booksController.getBookByGenre);

module.exports = router;
