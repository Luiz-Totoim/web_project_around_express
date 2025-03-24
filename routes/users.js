const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Load users data
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

// GET users route
router.get('/users', (req, res) => {
  res.json(usersData);
});

// GET user by id
router.get('/users/:id', (req, res) => {
  const user = usersData.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'ID do usuário não encontrado' });
  }

  res.json(user);
});

module.exports = router;
