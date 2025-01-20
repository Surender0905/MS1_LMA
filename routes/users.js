const express = require("express");
const { addUser } = require("../controllers/users");

const router = express.Router();

router.post("/api/users", addUser);

module.exports = router;
