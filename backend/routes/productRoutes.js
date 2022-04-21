const express = require('express');
const{getAllProducts,getProductById,userdetail,getallcartitem,addcartdetail}= require('../controller/productController');
const router = express.Router();


router.get('/',getAllProducts);

router.get('/:id',getProductById);  

router.post('/user',userdetail);

router.get('/getcart',getallcartitem);

router.post('/addcart',addcartdetail);



// router.post('/payment', async (req, res) => {
//   const prices = await stripe.prices.list({
//     lookup_keys: [req.body.lookup_key],
//     expand: ['data.product'],
//   });
//   const session = await stripe.checkout.sessions.create({
//     billing_address_collection: 'auto',
//     line_items: [
//       {
//         price: prices.data[0].id,
//         quantity: 1,

//       },
//     ],
//     mode: 'subscription',
//     success_url: `/?success=true&session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

module.exports = router;