const express = require("express");

const { searchBooks, addBook } = require("../controllers/books");

const router = express.Router();

router.post("/api/books", addBook);
router.get("/api/books/search", searchBooks);

module.exports = router;
