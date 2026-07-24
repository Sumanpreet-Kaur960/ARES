const app = require("./app");
const connectDB = require("./database/db");

const PORT = 5000;

// connect DB first
connectDB();

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});