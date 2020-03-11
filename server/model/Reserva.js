var mongoose = require('mongoose');

var ReservaSchema = new mongoose.Schema({
    idServicio: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    updated_date: { 
        type: Date, 
        default: Date.now },
  });

  var reseva = mongoose.model('Reserva', ReservaSchema);
  module.exports = reseva;