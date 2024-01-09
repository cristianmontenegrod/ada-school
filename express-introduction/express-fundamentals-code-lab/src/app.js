const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/mensaje', (req, res) => {
  res.send('este es mi servidor usando express');
});

const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;
