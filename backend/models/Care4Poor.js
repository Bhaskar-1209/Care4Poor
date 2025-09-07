const mongoose = require("mongoose");

const c4pprojectSchema = new mongoose.Schema(
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

module.exports = mongoose.model("c4pproject", c4pprojectSchema);
