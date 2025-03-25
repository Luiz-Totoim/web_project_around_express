const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { HttpStatus, HttpResponseMessage } = require('../enums/http');

// Load Cards data
const cardsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/cards.json')));

// GET cards route
router.get('/cards', (req, res) => {
  res.status(HttpStatus.OK).json(cardsData);
});

// GET cards by id
router.get('/cards/:_id', (req, res) => {
  const card = cardsData.find(c => c._id === req.params._id);

  if (!card) {
    return res.status(HttpStatus.NOT_FOUND).json(HttpResponseMessage.NOT_FOUND);
  }

  res.status(HttpStatus.OK).json(card);
});

module.exports = router;