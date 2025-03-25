const express = require('express');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const { HttpStatus, HttpResponseMessage } = require('./enums/http');
const app = express();
const PORT = 3000;

// Bind routes
app.use(usersRoutes);
app.use(cardsRoutes);

// Default 404
app.use((req, res) => {
  return res.status(HttpStatus.NOT_FOUND).send(HttpResponseMessage.NOT_FOUND);
});

// Starts server
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});