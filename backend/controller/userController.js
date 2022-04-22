
const user = require("../models/user");

const userdetail = async (req, res) => {
    const newUser = new user({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      password:req.body.password, 
      address:req.body.address,
      gender:req.body.gender,
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  

  const getuserdetail = async (req,res)=>{
    try{
      console.log('hello')
      const getuser = await user.find()
      res.json(getuser);
    }catch(error){
      res.status(500).json({message:`user detail not found`})
    }
  }


module.exports = {
    userdetail,
    getuserdetail
  };