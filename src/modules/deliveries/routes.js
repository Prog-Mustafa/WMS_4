const router = require('express').Router();
const controller = require('./controller');
const { authenticate, authorize } = require('../../middleware/auth');

router.post('/', authenticate, authorize(['admin', 'clerk']), controller.create);

module.exports = router;
