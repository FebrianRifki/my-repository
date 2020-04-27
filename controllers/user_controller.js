const User = require("../models/user_model");

// Create and Save a new User
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    userType: req.body.userType,
    employeeID: req.body.employeeID,
    userName: req.body.userName,
    password: req.body.password
  });
  
  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving user."
          });
        else 
        result = {data:data}  
        res.render("user", result);
      });
};

// Find a single User with a usersId
exports.findOne = (req, res) => {
    User.findById(req.params.usersId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.usersId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving User with id " + req.params.usersId
            });
          }
        } else res.send(data);
      });
};

// Update a User identified by the usersId in the request
exports.update = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  User.updateById(
    req.params.usersId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.usersId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating user with id " + req.params.usersId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a User with the specified usersId in the request
exports.delete = (req, res) => {
    User.remove(req.params.usersId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.usersId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete User with id " + req.params.usersId
            });
          }
        } else res.send({ message: `User was deleted successfully!` });
      });
};

// Delete all User from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all users."
          });
        else res.send({ message: `All Users were deleted successfully!` });
      });
};