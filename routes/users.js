const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { HttpStatus, HttpResponseMessage } = require("../enums/http");

// Load users data
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

// GET users route
router.get('/users', (req, res) => {
  res.status(HttpStatus.OK).json(usersData);
});

// GET user by id
router.get('/users/:_id', (req, res) => {
  const user = usersData.find(u => u._id === req.params._id);

  if (!user) {
    return res.status(HttpStatus.NOT_FOUND).json(HttpResponseMessage.NOT_FOUND);
  }

  res.status(HttpStatus.OK).json(user);
});

module.exports = router;
