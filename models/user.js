const Schema = require("mongoose").Schema;
const db = require("../db/config");

const User = db.model("User", {
  name: String,
  room: Number,
  bed: {
    type: Schema.Types.ObjectId,
    ref: "Bed",
  },
});

module.exports = User;
