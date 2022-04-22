const express = require('express');
const{userdetail,getuserdetail}= require('../controller/userController');
const router = express.Router();


router.post('/user',userdetail);

router.get('/getuser',getuserdetail)




module.exports = router;