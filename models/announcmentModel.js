const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    corx: {
      type: String,
    },
    message: {
      type: String,
    },
    session: {
      type: String,
    },
    course: {
      type: String,
    },
    date: {
      type: String,
    },
    stime: {
      type: String,
    },
    etime: {
      type: String,
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

const Announce = mongoose.model("Announce", noteSchema);

module.exports = Announce;
