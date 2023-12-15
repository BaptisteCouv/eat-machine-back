const { default: mongoose } = require("mongoose");

const meals = mongoose.Schema({
  name: { type: String, require: true },
  recurrence: { type: Boolean, require: true },
  dateSelect: { type: Date, require: false },
  idCategory: [],
});

module.exports = mongoose.model("Meals", meals);
