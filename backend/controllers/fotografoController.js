//const Fotografo = require('./models/fotografia');
//const Fotografo=require('/Users/Abraham/Desktop/new_photobook_backend/models/fotografo');
const Fotografo=require('../models/fotografo');
// Obtener todos los fotógrafos
const obtenerFotografos = async (req, res) => {
  try {
    const fotografos = await Fotografo.find();
    res.json(fotografos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




/*
// Crear un nuevo fotógrafo
const crearFotografo = async (req, res) => {
  try {
    const fotografo = new Fotografo(req.body);
    await fotografo.save();
    res.json(fotografo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};*/
const crearFotografo = async (req, res) => {
    try {
      // Obtener los datos enviados en el formulario
      const { nombre, apellido, edad, ciudad, tiempo_de_fotografo, tiene_estudios, foto } = req.body;
  
      // Crear un nuevo fotógrafo con los datos del formulario
      const fotografo = new Fotografo({
        nombre,
        apellido,
        edad,
        ciudad,
        tiempo_de_fotografo,
        tiene_estudios,
        foto
      });
  
      // Guardar el fotógrafo en la base de datos
      await fotografo.save();
  
      res.json(fotografo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
  
  
 
  
 
  









// Obtener un fotógrafo por ID
const obtenerFotografoPorId = async (req, res) => {
  try {
    const fotografo = await Fotografo.findById(req.params.id);
    if (!fotografo) {
      return res.status(404).json({ error: 'Fotógrafo no encontrado' });
    }
    res.json(fotografo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un fotógrafo por ID
const actualizarFotografo = async (req, res) => {
  try {
    const fotografo = await Fotografo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fotografo) {
      return res.status(404).json({ error: 'Fotógrafo no encontrado' });
    }
    res.json(fotografo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un fotógrafo por ID
const eliminarFotografo = async (req, res) => {
  try {
    const fotografo = await Fotografo.findByIdAndRemove(req.params.id);
    if (!fotografo) {
      return res.status(404).json({ error: 'Fotógrafo no encontrado' });
    }
    res.json({ message: 'Fotógrafo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerFotografos,
  crearFotografo,
  obtenerFotografoPorId,
  actualizarFotografo,
  eliminarFotografo,
};
