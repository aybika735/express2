const {Router} = require('express');
const router = Router();
const {productsController} = require('../controllers/products.controller');
router.get('/products', (req, res)=>{
    res.send([
       'помидоры',
       'огурцы',
       'капуста', 
       'петрушка'
        ]);
})

router.get('/products/:id', productsController.getProductsById )
router.post('/products/:id', productsController.createProduct)
router.delete('/products/:id', productsController.removeProductsbyId)

module.exports = router;
