require("dotenv").config(); // Use this at the top
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const c4pprojectRoutes = require("./routes/care4poorRoutes");
const d4cprojectRoutes = require("./routes/debate4changeRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" })); // Important for base64

app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

app.use("/api/users", userRoutes);
app.use("/api/c4p/projects", c4pprojectRoutes);
app.use("/api/d4c/projects", d4cprojectRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5050;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
