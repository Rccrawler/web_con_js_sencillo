// Realiza una petición GET al backend
fetch('http://localhost:3000/')
  .then(response => response.text())
  .then(data => {
    document.getElementById('mensaje').textContent = data;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('mensaje').textContent = 'Error al conectar con el backend.';
  });
