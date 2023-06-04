// usuarioController.js

const Usuario = require('../models/usuario');

// Obtener todos los usuarios
async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Crear un nuevo usuario
async function crearUsuario(req, res) {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Obtener un usuario por ID
async function obtenerUsuarioPorId(req, res) {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar un usuario por ID
async function actualizarUsuario(req, res) {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Eliminar un usuario por ID
async function eliminarUsuario(req, res) {
  try {
    const usuario = await Usuario.findByIdAndRemove(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
