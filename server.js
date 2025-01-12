const express = require('express');
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta principal (opcional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Ruta para el endpoint /api/whoami
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip; // Dirección IP del cliente
  const language = req.headers['accept-language']; // Idioma preferido del cliente
  const software = req.headers['user-agent']; // Información del software del cliente

  res.json({
    ipaddress,
    language,
    software,
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
