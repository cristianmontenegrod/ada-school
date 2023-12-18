const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();

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
app.use(bodyParser.json());

// Usuarios predefinidos (reemplázalos con tus propios datos)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Ruta para autenticación
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verifica las credenciales del usuario
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Crea un token JWT
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Middleware para validar el token JWT en rutas protegidas
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token no válido' });
    }

    req.user = user;
    next();
  });
};

// Ruta protegida
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Ruta protegida', user: req.user });
});

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});