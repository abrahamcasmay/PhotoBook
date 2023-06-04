// fotografiaController.js

const Fotografia = require('../models/fotografia');

// Obtener todas las fotografías
async function obtenerFotografias(req, res) {
  try {
    const fotografias = await Fotografia.find();
    res.json(fotografias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Crear una nueva fotografía
async function crearFotografia(req, res) {
  try {
    const fotografia = new Fotografia(req.body);
    await fotografia.save();
    res.json(fotografia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Obtener una fotografía por ID
async function obtenerFotografiaPorId(req, res) {
  try {
    const fotografia = await Fotografia.findById(req.params.id);
    if (!fotografia) {
      return res.status(404).json({ error: 'Fotografía no encontrada' });
    }
    res.json(fotografia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar una fotografía por ID
async function actualizarFotografia(req, res) {
  try {
    const fotografia = await Fotografia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fotografia) {
      return res.status(404).json({ error: 'Fotografía no encontrada' });
    }
    res.json(fotografia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Eliminar una fotografía por ID
async function eliminarFotografia(req, res) {
  try {
    const fotografia = await Fotografia.findByIdAndRemove(req.params.id);
    if (!fotografia) {
      return res.status(404).json({ error: 'Fotografía no encontrada' });
    }
    res.json({ message: 'Fotografía eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  obtenerFotografias,
  crearFotografia,
  obtenerFotografiaPorId,
  actualizarFotografia,
  eliminarFotografia
};
