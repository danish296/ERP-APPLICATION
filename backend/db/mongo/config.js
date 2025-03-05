const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } 
    catch(e){
        console.error("MongoDB Connection Failed");
        process.exit(1);
    }
};

module.exports={
    connectDB
}
