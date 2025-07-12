const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur ICX-Suite Backend 🎧');
});

app.get('/test', (req, res) => {
  res.json({ status: 'OK', message: 'API en ligne' });
});

// 🚀 Nouvelle route /api/data pour ICX
app.get('/api/data', (req, res) => {
  const data = [
    { id: 1, name: 'Client A', status: 'Actif' },
    { id: 2, name: 'Client B', status: 'En attente' },
    { id: 3, name: 'Client C', status: 'Archivé' }
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Serveur ICX en écoute sur le port ${port}`);
});
