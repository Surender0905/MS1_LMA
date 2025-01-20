const { User } = require("../models");

const addUser = async (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res
            .status(400)
            .json({ message: "Username and email are required" });
    }

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = await User.create({ username, email });
        return res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { addUser };
