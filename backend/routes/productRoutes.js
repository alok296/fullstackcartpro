const express = require('express');
const{getAllProducts,getProductById,userdetail,getallcartitem,addcartdetail,getuserdetail}= require('../controller/productController');
const router = express.Router();


router.get('/',getAllProducts);

router.get('/:id',getProductById);  

module.exports = router;