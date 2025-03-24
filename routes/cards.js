const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Load Cards data
const cardsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/cards.json')));

// GET cards route
router.get('/cards', (req, res) => {
  res.json(cardsData);
});

// GET cards by id
router.get('/cards/:_id', (req, res) => {
  const card = cardsData.find(c => c._id === req.params._id);

  if (!card) {
    return res.status(404).json({ message: 'ID do card não encontrado' });
  }

  res.json(card);
});

module.exports = router;