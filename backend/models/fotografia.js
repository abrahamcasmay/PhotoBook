const mongoose = require('mongoose');

const fotografiaSchema = new mongoose.Schema({
  nombreFotografo: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  id_fotografo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fotografo',
    required: true,
  },
  nombre_fotografia: {
    type: String,
    required: true,
  },
});

const Fotografia = mongoose.model('Fotografia', fotografiaSchema);

module.exports = Fotografia;
