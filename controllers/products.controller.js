module.exports.productsController={
   getProductsById: function (req, res){
    res.json(`продукт с айди:${req.params.id}`);

},

createProduct: function (req, res){
    console.log(req.body);
    console.log(req.params.id)
    res.json(`продукт добавлен`);
 },

 removeProductsbyId: function (req, res){
    res.json(`продукт с айди:${req.params.id} удален`);
}


}