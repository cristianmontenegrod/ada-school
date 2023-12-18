const express = require('express');
const app = express();

// Middleware para permitir solo métodos HTTP válidos
app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  if (!validMethods.includes(req.method)) {
    return res.status(400).json({ error: 'Método HTTP no válido' });
  }
  next();
});

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});