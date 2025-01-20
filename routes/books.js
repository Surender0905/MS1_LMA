const express = require("express");

const { searchBooks, addBook, updateBook } = require("../controllers/books");

const router = express.Router();

router.post("/api/books", addBook);
router.post("/api/books/:bookId", updateBook);
router.get("/api/books/search", searchBooks);

module.exports = router;
