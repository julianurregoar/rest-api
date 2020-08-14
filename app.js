require("dotenv-flow").config();
const express = require("express");
const { connectDB } = require("./db");
const authRoutes = require("./routes/auth");

const app = express();

// connect database
connectDB();

// port
app.set("PORT", process.env.PORT || 5000);

app.get("/api", (req, res) => res.send("API running"));

module.exports = app;
