const mongoose = require("mongoose");
const dns = require("node:dns");


dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    // Replace <db_password> with your actual database password
    const MONGO_URI =
      process.env.MONGO_URI ||
      "mongodb+srv://Suman:Suman123@cluster0.hudmbi9.mongodb.net/myDatabaseName?retryWrites=true&w=majority";

    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ DB Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;