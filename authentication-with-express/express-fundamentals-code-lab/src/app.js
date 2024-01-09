const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  { email: "admin@example.com", name: "admin", rol: "admin" },
  { email: "user@example.com", name: "user", rol: "user" },
];

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Bienvenido a la api de ADA Cars");
});

// Ruta de autenticación
app.post('/auth', (req, res) => {
  const { email } = req.body;

  // Verifica si el email está registrado en el arreglo users
  const user = users.find((user) => user.email === email);

  if (!user) {
    // Si el email no está registrado, responde con un error 401
    return res.status(401).send({ error: "Invalid user name or password" });
  }

  // Si el email está registrado, firma un token y responde con él
  const token = jwt.sign(user, process.env.SECRET_KEY, { algorithm: 'HS256' });
  res.json({ token });
});

// Middleware para validar tokens JWT
function JWTValidation(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  // Verifica el token y extrae la información del usuario
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Añade el rol al request
    req.rol = decoded.rol;
    next();
  });
}

// Ruta protegida para premium clients
app.get('/premium-clients', JWTValidation, (req, res) => {
  if (req.rol === 'admin') {
    res.json({ message: "premium-clients list" });
  } else {
    res.status(403).json({ error: "Access not allowed" });
  }
});

// Ruta protegida para medium clients
app.get('/medium-clients', JWTValidation, (req, res) => {
  if (req.rol === 'admin' || req.rol === 'user') {
    res.json({ message: "medium-clients list" });
  } else {
    res.status(403).json({ error: "Access not allowed" });
  }
});

const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;
