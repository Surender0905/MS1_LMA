const express = require("express");
const {
    addToReadingList,
    readingList,
    deleteReadingListItem,
} = require("../controllers/reading-list");

const router = express.Router();

router.post("/api/reading-list", addToReadingList);
router.get("/api/reading-list/:userId", readingList);
router.post("/api/reading-list/:readingListId", deleteReadingListItem);

module.exports = router;
