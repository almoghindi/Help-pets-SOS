const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
  report: { type: String, required: true },
});

module.exports = mongoose.model("report", reportSchema);
