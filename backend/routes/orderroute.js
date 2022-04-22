const express = require('express');
const{addcartdetail,getallcartitem}= require('../controller/cartController');
const router = express.Router();


router.get('/getcart',getallcartitem);

router.post('/addcart',addcartdetail);



module.exports = router;