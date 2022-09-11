const { Router } = require("express");
const { authorsController } = require("../controllers/authors.controller");
const router = Router();

router.post("/authors", authorsController.addAuthor);
router.delete("/authors/:id", authorsController.deleteAuthor);
router.get("/authors", authorsController.getAuthors);

module.exports = router;
