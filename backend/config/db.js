require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
console.log(`Remote database Has been Connect Successfully`);
    }catch(error){
        console.log(`remote Database Not Connected !! ${error}`);
        process.exit(1);
    }}
module.exports = connectDB;
