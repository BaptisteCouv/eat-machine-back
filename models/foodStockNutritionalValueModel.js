const { default: mongoose } = require("mongoose");

const foodNutritionalValue = mongoose.Schema({
  name: { type: String, require: true },
  unitMeasurement: { type: Boolean, require: true },
  calories: { type: Number, require: true },
  protein: { type: Number, require: true },
  lipid: { type: Number, require: true },
  carbohydrates: { type: Number, require: true },
  price: { type: Number, require: false },
});

module.exports = mongoose.model("FoodNutritionalValue", foodNutritionalValue);

// {
//   "name": "Amandes",
//   "unitMeasurement": false,
//   "calories": 525,
//   "protein": 95,
//   "lipid": 5,
//   "carbohydrates": 68,
//   "price": 2.5
// }