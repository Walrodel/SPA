(function () {
    var mongoose = require('mongoose');
    var reserva = mongoose.model('Reserva');

    exports.createReserva = function (data, callback) {
        reserva.create(data).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };

    exports.findReserva = function (query, callback) {
        reserva.findOne(query, callback);
    }

    exports.findReservaFecha = function (query, callback) {
        reserva.find(query, callback);
    }

    exports.updateReservaById = function (id, data, callback) {
        reserva.findByIdAndUpdate({
            _id: id
        }, data, (err, response) => {
            callback(err, response);
        });
    }

    exports.deleteReserva = function (query, callback) {
        reserva.deleteOne(query, callback);
    }

    exports.all = function (query, callback) {
        reserva.find(query, callback);
    }
    
})()