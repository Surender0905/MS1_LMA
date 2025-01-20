const express = require("express");
const { sequelize } = require("./models");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const readingListRouter = require("./routes/reading-list");
const app = express();

app.use(express.json());

// Your routes here
app.use("/", userRouter);
app.use("/", bookRouter);
app.use("/", readingListRouter);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Error: " + err);
    });
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
