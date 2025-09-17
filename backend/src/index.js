const express = require("express");
const connectDB = require("./db/db");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to backend of ecommerce-store !!" });
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const sellerRoutes = require("./routers/SellerRoutes.js");
const AdminRoutes = require("./routers/AdminRoutes.js");

app.use("/sellers", sellerRoutes);
app.use("/admin", AdminRoutes);

const PORT = 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);
  await connectDB();
});
