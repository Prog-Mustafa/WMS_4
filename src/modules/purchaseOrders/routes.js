const router = require('express').Router();
const controller = require('./controller');
const { authenticate, authorize } = require('../../middleware/auth');

router.get('/', authenticate, authorize(['admin', 'clerk', 'supervisor']), controller.list);

module.exports = router;
