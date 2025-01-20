const { User, Book, ReadingList } = require("../models");

const addToReadingList = async (req, res) => {
    const { userId, bookId, status } = req.body;

    if (!userId || !bookId || !status) {
        return res
            .status(400)
            .json({ message: "User ID, Book ID, and Status are required" });
    }

    try {
        const user = await User.findByPk(userId);
        const book = await Book.findByPk(bookId);

        if (!user || !book) {
            return res.status(400).json({ message: "Invalid user or book ID" });
        }

        const newReadingListItem = await ReadingList.create({
            userId,
            bookId,
            status,
        });
        return res.status(201).json({
            message: "Book added to reading list",
            readingList: newReadingListItem,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    addToReadingList,
};
