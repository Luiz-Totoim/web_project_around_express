const express = require('express');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const app = express();
const PORT = 3000;

// Bind routes
app.use(usersRoutes);
app.use(cardsRoutes);

// Default 404
app.use((req, res) => {
  res.status(404).json({ message: 'A solicitação não foi encontrada' });
});

// Starts server
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});