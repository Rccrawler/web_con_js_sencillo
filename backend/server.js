const express = require('express');
const cors = require('cors');

const app = express();

// Permitir solicitudes desde otros orígenes (frontend)
app.use(cors());

// Ruta raíz que envía un mensaje de verificación
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor backend corriendo en el puerto 3000');
});
