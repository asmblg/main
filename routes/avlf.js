const router = require('express').Router();
const avlfControllers = require('../controllers/avlfControllers');

router.route('/evictioncases').get(avlfControllers.findAllEvictionCases);

module.exports = router;
