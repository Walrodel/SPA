(function () {
    var mongoose = require('mongoose');
    var servicio = mongoose.model('Servicio');

    exports.createSevicio = function (data, callback) {
        servicio.create(data).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };

    exports.findServicio = function (query, callback) {
        servicio.findOne(query, callback);
    }

    exports.updateServicioById = function (id, data, callback) {
        servicio.findByIdAndUpdate({
            _id: id
        }, data, (err, response) => {
            callback(err, response);
        });
    }

    exports.deleteServico = function (query, callback) {
        servicio.deleteOne(query, callback);
    }

    exports.all = function (query, callback) {
        servicio.find(query, callback);
    }
    
})()