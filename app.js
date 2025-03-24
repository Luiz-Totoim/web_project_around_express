const express = require('express');
const fs = require('fs');
const path = require('path');

// Starts the server
const app = express();
const PORT = 3000;

// Carrega os dados de usuários e cards a partir dos arquivos JSON
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/users.json')));
const cardsData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/cards.json')));

// Rota para listar todos os usuários
app.get('/users', (req, res) => {
  res.json(usersData);
});

// Rota para listar todos os cards
app.get('/cards', (req, res) => {
  res.json(cardsData);
});

// Rota para obter um usuário por ID
app.get('/users/:id', (req, res) => {
  const user = usersData.find(u => u._id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'ID do usuário não encontrado' });
  }

  res.json(user);
});

// Caso o caminho não seja encontrado
app.use((req, res) => {
  res.status(404).json({ message: 'A solicitação não foi encontrada' });
});

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});