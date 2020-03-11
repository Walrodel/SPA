var express = require('express');
var router = express.Router();
var servicio = require('../controller/servicio');

router.get('/', servicio.all);

/**
 * To create the New servicio
 */
router.post('/', servicio.create);

/**
 * TO get the single servicio by their servicioname eg.email
 */
router.get('/:id', servicio.find);

/**
 * To update servicio data(fields) by servicio ID
 */
router.put('/:id', servicio.updateById);

/**
 * To delete the servicio by condition
 */
router.delete('/:id', servicio.delete);

module.exports = router;
