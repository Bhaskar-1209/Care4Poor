// models/UserScheme.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  position: String,
  role: String,
  password: String,
  organizations: [String],  // 🆕 Add this field
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
