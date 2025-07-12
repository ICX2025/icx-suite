const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur ICX-Suite Backend 🎧');
});

app.listen(port, () => {
  console.log(`Serveur ICX en écoute sur le port ${port}`);
});
