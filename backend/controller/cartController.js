const cartvalue = require("../models/cartitem");
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
  try{
      const cartvalue1 = await cartvalue.find()
      res.status(201).json(cartvalue1);
  }
    catch (error) {
      console.log(error);
      res.status(500).json({ message: "server Error" });
    }
  };


  module.exports = {
    addcartdetail,
    getallcartitem,
  };