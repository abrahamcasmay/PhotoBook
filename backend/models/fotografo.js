const mongoose = require('mongoose');

const fotografoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  ciudad: { type: String, required: true },
  tiempo_de_fotografo: { type: Number, required: true },
  tiene_estudios: { type: Boolean, required: true },
  foto: { type: String}
});

const Fotografo = mongoose.model('Fotografo', fotografoSchema);

module.exports = Fotografo;
