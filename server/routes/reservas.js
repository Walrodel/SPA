var express = require('express');
var router = express.Router();
var reserva = require('../controller/reserva');

router.get('/', reserva.all);

/**
 * To create the New reserva
 */
router.post('/', reserva.create);

/**
 * TO get the single reserva by their reservaname eg.email
 */
router.get('/reserva/:id', reserva.find);

/**
 * To update reserva data(fields) by reserva ID
 */
router.put('/:id', reserva.updateById);

/**
 * To delete the reserva by condition
 */
router.delete('/:id', reserva.delete);

module.exports = router;
