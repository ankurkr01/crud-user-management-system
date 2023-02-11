const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = mongoose.connect('mongodb://localhost:27017/Users')

        console.log(`MongoDB connected `);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;