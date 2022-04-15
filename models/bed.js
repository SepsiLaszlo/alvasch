const Schema = require("mongoose").Schema;
const db = require("../db/config");
const User = require("./user");

const bedPositions = {
    "right-top": "Jobb felső",
    "left-top": "Bal felső",
    "right-bottom": "Jobb alsó",
    "left-bottom": "Bal alsó"
  }

const BedSchema = new Schema({
  position: String,
  room: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

BedSchema.methods.Position= function(){
    return bedPositions[this.position];
}
const Bed = db.model("Bed", BedSchema);

module.exports = Bed;
