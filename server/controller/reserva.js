var reservaService = require('../service/reserva');
const servicioService = require('../service/servicio');

exports.create = function (req, res, next) {
    var body = new Reserva(req.body);
    console.log(req.body)
    if (!body.idServicio) {
        res.status(400).send('idsSevicio es requerido');
        return;
    }
    servicioService.findServicio({ _id: body.idServicio }, function (error, servicio) {
        if (servicio) {
            reservaService.createReserva(body, function (error, response) {
                if (response) {
                    res.status(201).send(response);
                } else if (error) {
                    res.status(400).send(error);
                }
            });
        } else {
            res.status(500).send({ error: "Servicio no existe" });
        }
    })

}

exports.find = function (req, res) {
    var params = req.params || {};
    var query = {
        id: params.id
    };
    if (!query) {
        res.status(400).send('Bad Request');
        return;
    }
    reservaService.findReserva(query, function (error, response) {
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
    const filter = {};
    const startDate = req.query.startDate || '';
    const endDate = req.query.endDate || '';

    if (startDate !== "" && endDate !== "") {
        filter.fecha = {
            $gte : new Date(startDate),
            $lte : new Date(endDate)
        }
    }
    console.log(' filtro dee fecha >>> ', filter);
    reservaService.all(filter, function (error, response) {
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
    reservaService.updateReservaById(id, updateData, (err, response) => {
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
    reservaService.deleteReserva(query, function (error, response) {
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

class Reserva {
    constructor(resevaData) {
        this.idServicio = resevaData.idServicio || '';
        this.fecha = resevaData.fecha || '';
    }
}
