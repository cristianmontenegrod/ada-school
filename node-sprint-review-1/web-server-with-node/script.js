const http = require('http'); 
const server = http.createServer((req, res) => { 
    res.writeHead(200, {'Content-Type': 'application/json'}); 
    const tasks = [
      { id: 1, description: 'Hacer la compra', completed: false },
      { id: 2, description: 'Hacer ejercicio', completed: true },
      { id: 3, description: 'Estudiar Node.js', completed: false }
    ];
    res.write(JSON.stringify(tasks)); 
    res.end(); 
}); 

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000'); 
});