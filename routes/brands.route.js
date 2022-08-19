const {Router} = require('express');
const {brandsController} =require('../controllers/brands.controller')
const router = Router();

router.get('/brands', brandsController.getBrands)

router.post('/brands', brandsController.createBrand)

router.delete('/brands', brandsController.removeBrands)

module.exports = router;
