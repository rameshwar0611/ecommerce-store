const { default: mongoose } = require("mongoose");

const url =
  "mongodb+srv://rameshwardangi0611:9522RammMB@ecommercecluster.ixrllr1.mongodb.net/?retryWrites=true&w=majority&appName=ecommerceCluster";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Error: ${error}`);
  }
};

module.exports = connectDB;
  