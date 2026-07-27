require('dotenv').config();
const express = require("express");

const app = express();

// middleware
app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("ARES Server Running 🚀");
});

const sessionRoutes = require("./routes/sessionRoutes");

app.use("/api/sessions", sessionRoutes);

module.exports = app;