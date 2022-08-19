module.exports.brandsController={
    getBrands: function (req, res){
     res.json(['MaxMara','Zara','Massimo Dutti','Mango']);
 
 },
 
 createBrand: function (req, res){
    
     res.json(`бренд добавлен`);
  },
 
  removeBrands: function (req, res){
     res.json(`бренд удален`);
 }
 
 
 }