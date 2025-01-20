const { Book } = require("../models");

const addBook = async (req, res) => {
    const { title, author, genre, publicationYear } = req.body;

    if (!title || !author) {
        return res
            .status(400)
            .json({ message: "Book title and author are required" });
    }

    try {
        const newBook = await Book.create({
            title,
            author,
            genre,
            publicationYear,
        });
        return res.status(201).json({
            message: "Book added successfully",
            book: newBook,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

const searchBooks = async (req, res) => {
    const { title, author } = req.query;

    const searchCriteria = {};
    if (title) searchCriteria.title = { [Op.like]: `%${title}%` };
    if (author) searchCriteria.author = { [Op.like]: `%${author}%` };

    try {
        const books = await Book.findAll({ where: searchCriteria });

        if (books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }

        return res.status(200).json({ books });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { addBook, searchBooks };
