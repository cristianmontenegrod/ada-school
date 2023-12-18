const express = require('express');
const app = express();
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});

