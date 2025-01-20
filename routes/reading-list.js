const express = require("express");
const { addToReadingList } = require("../controllers/reading-list");

const router = express.Router();

router.post("/api/reading-list", addToReadingList);

module.exports = router;
