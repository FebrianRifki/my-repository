const express = require('express');
const router = express.Router();
const users = require("../controllers/user_controller");

// Create a new User
router.post("/users/create", users.create);

// Retrieve all Users
router.get("/getAll", users.findAll);

// Retrieve a single User with UserId
router.get("/find/:usersId", users.findOne);

// Update a User with UserId
router.put("/users/:usersId", users.update);

// Delete a User with UserId
router.delete("/users/:usersId", users.delete);

// Create a new User
router.delete("/users", users.deleteAll);

module.exports = router;