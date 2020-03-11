var mongoose = require('mongoose');

var ServicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    urlImg: {
        type: String,
        required: true,
    },
    diasServicio: {
        type: Array,
        required: true,
    },
    updated_date: { 
        type: Date, 
        default: Date.now 
    },
  });

  var sevicio = mongoose.model('Servicio', ServicioSchema);

  module.exports = sevicio;