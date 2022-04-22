require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const orderroutes = require('./routes/orderroute');
const userroutes= require('./routes/userroute');
// const cors = require("cors")
const bodyParser = require("body-parser")
connectDB();
console.log(`in server`)
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/products',productRoutes);
app.use('/user',userroutes)
app.use('/cart',orderroutes)

// app.use(cors())
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`server is Running on Port : ${PORT}`));