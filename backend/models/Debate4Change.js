const mongoose = require("mongoose");

const d4pprojectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    googleFormLink: String,
    contributors: [String],
    images: [String], // Base64 strings
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("D4CProject", d4pprojectSchema);
