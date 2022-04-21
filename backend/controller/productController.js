require("dotenv").config();
const Product = require("../models/Product");
const user = require("../models/user");
const cartvalue = require("../models/cartitem")
// const stripe = require("stripe")(
//   "sk_test_51KptAJSAL8uVk4rJhjEhfHkxSCudOIpSu4Xmp8exxwRER0Ct4XqW5jKpwIa0iw2vAzQtgpdNcMkU3jlpX0Y16UBv00UMOsYktj"
// );

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server Error" });
  }
};

const userdetail = async (req, res) => {
  const newUser = new user({
    name: req.body.name,
    contact: req.body.contact,
    email: req.body.email,
    password:req.body.password, 
    address:req.body.address,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};



const addcartdetail = async (req, res) => {
  const newcart = new cartvalue({
    name: req.body.name,
    email: req.body.email, 
    imageUrl:req.body.imageUrl,
    totalprice:req.body.totalprice,
    qty:req.body.qty,
  });
  try {
    const newcartdata = await newcart.save();
    res.status(201).json(newcartdata);
  } catch (err) {
    res.status(500).json(err);
  }
};


const getallcartitem = async(req, res) => {

    const cartvalue1 = await cartvalue.find()
    console.log(cartvalue1)
    res.staus(201).json(cartvalue1);
    
  // catch (error) 
  //   console.log(error);
  //   res.status(500).json({ message: "server Error" });
  // }
};



// const getPayment = async (req, res) => {
//   const { product } = req.body;
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: product.name,
//             images: [product.image],
//           },
//           unit_amount: product.amount * 100,
//         },
//         quantity: product.quantity,
//       },
//     ],
//     mode: "payment",
//     success_url: `http://localhost:3002/api/products/success`,
//     cancel_url: `http://localhost:3002/api/products/fail`,
//   });
//   res.json({ id: session.id });
// };

module.exports = {
  getAllProducts,
  getProductById,
  userdetail,
  addcartdetail,
  getallcartitem,
};
