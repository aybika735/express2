const { Router} = require('express');
const router = Router();
router.use(require('./brands.route'));
router.use(require('./products.route'));
module.exports = router;