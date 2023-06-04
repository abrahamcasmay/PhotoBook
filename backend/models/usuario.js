// usuario.js

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  password: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
