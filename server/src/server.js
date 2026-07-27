const app = require("./app");
const connectDB = require("./database/db");

// ✅ ADD THIS IMPORT
const userRoutes = require("./routes/userRoutes");

const PORT = 5001;

// connect DB first
connectDB();

// ✅ CONNECT ROUTES (MUST be before listen)
app.use('/api/users', userRoutes);

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});