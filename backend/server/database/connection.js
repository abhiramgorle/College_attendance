const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin@abhiramcluster.rjmpiyb.mongodb.net/?retryWrites=true&w=majority&appName=AbhiramCluster", {});
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
