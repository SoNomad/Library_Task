const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");
const router = Router();

router.post("/genres", genresController.addGenre);
router.delete("/genres/:id", genresController.deleteGenre);
router.get("/genres", genresController.getGenres);

module.exports = router;
