const mongoose = require("mongoose");

const PublicNoteSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    userr: {
      type: String,
    },
    caption: {
      type: String,
    },

    pic: {
      type: String,
      default: "",
    },
    shortImage: {
      type: String,
      default: "",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const PublicNote = mongoose.model("PublicNote", PublicNoteSchema);

module.exports = PublicNote;
