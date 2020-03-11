var servicioService = require('../service/servicio');

exports.create = function (req, res, next) {
    var body = new Servicio(req.body);
    console.log(req.body)
    if (!body.nombre) {
        res.status(400).send('El nombre del sevicio es requerido');
        return;
    }
    servicioService.createSevicio(body, function (error, response) {
        if (response) {
            res.status(201).send(response);
        } else if (error) {
            res.status(400).send(error);
        }
    });
}

exports.find = function (req, res) {
    var params = req.params || {};
    var query = {
        _id: params.id
    };
    if (!query) {
        res.status(400).send('Bad Request');
        return;
    }
    servicioService.findServicio(query, function (error, response) {
        if (error) {
            res.status(404).send(error);
            return;
        }
        if (response) {
            res.status(200).send(response);
            return;
        }
        if (!response) {
            res.status(204).send('No Data Found');
        }
    });
}

exports.all = function (req, res) {
    servicioService.all({}, function (error, response) {
        if (error) {
            res.status(404).send(error);
            return;
        }
        if (response) {
            res.status(200).send(response);
            return;
        }
        if (!response) {
            res.status(204).send('No Data Found');
        }
    });
}

exports.updateById = function (req, res) {
    var id = req.params.id;
    var body = req.body;
    if (!id) {
        res.status(400).send('Id is missing');
        return;
    }
    var updateData = body || {}
    // console.log("Update>>>>",updateData)
    servicioService.updateServicioById(id, updateData, (err, response) => {
        if (response) {
            res.status(200).send(response);
        } else if (err) {
            res.status(400).send(err);
        }
    });
}

exports.delete = function (req, res) {
    var id = req.params.id;
    var query = {
        _id: id,
    };
    servicioService.deleteServico(query, function (error, response) {
        if (error) {
            res.status(400).send(error);
            return;
        }
        if (response) {
            if (response.n === 1 && response.ok === 1) {
                res.status(202).send(body);
            }
            if (response.n === 0 && response.ok === 1) {
                res.status(204).send({
                    message: 'No data found'
                });
            }
        }
    });
}

class Servicio {
    constructor(servicioData) {
        this.nombre = servicioData.nombre || '';
        this.descripcion = servicioData.descripcion || '';
        this.urlImg = servicioData.urlImg || '';
        this.diasServicio = servicioData.diasServicio || '';
    }
}
