const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fotografoController = require('./controllers/fotografoController');
const fotografiaController = require('./controllers/fotografiaController');
const usuarioController = require('./controllers/usuariosController');



const app = express();

// Configuración de body-parser para analizar los datos de solicitud como JSON
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://abrahamcasmay:Pes14papc@clusterphotobook.rcpy6bm.mongodb.net/new_photobook?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    app.listen(3000, () => {
      console.log('Servidor escuchando en el puerto 3000');
    });
  })
  .catch(error => {
    console.error('Error de conexión a MongoDB', error);
  });


// Rutas para los fotógrafos
app.get('/fotografos', fotografoController.obtenerFotografos);
app.post('/fotografos', fotografoController.crearFotografo);
app.get('/fotografos/:id', fotografoController.obtenerFotografoPorId);
app.put('/fotografos/:id', fotografoController.actualizarFotografo);
app.delete('/fotografos/:id', fotografoController.eliminarFotografo);

// Rutas para las fotografías
app.get('/fotografias', fotografiaController.obtenerFotografias);
app.post('/fotografias', fotografiaController.crearFotografia);
app.get('/fotografias/:id', fotografiaController.obtenerFotografiaPorId);
app.put('/fotografias/:id', fotografiaController.actualizarFotografia);
app.delete('/fotografias/:id', fotografiaController.eliminarFotografia);

// Rutas para los usuarios
app.get('/usuarios', usuarioController.obtenerUsuarios);
app.post('/usuarios', usuarioController.crearUsuario);
app.get('/usuarios/:id', usuarioController.obtenerUsuarioPorId);
app.put('/usuarios/:id', usuarioController.actualizarUsuario);
app.delete('/usuarios/:id', usuarioController.eliminarUsuario);

  
