const FoodBind = require("../models/foodBindModel");
const {
  getSpecificFoodNutritionalValueForMeals,
} = require("./foodStockNutritionalValueControllers");

// Display all FoodBind
exports.getAllFoodBind = (req, res, next) => {
  FoodBind.find()
    .then((contracts) => res.status(200).json(contracts))
    .catch((error) => res.status(400).json({ error }));
};

exports.getSpecificFoodBind = (req, res, next) => {
  const specificId = req.params.id;

  FoodBind.find({ idMeals: specificId })
    .then((alimentLiee) => {
      let test = alimentLiee;
      const promises = test.map((element) => {
        return getSpecificFoodNutritionalValueForMeals(element.idFood).then((food) => {
          element.foodDetails = food;
          return element;
        });
      });

      Promise.all(promises)
        .then((results) => {
          res.status(200).json(results);
        })
        .catch((error) => {
          console.error("Error in Promise.all:", error);
          res.status(400).json({ error });
        });
    })
    .catch((error) => res.status(400).json({ error }));
};

// Create one FoodBind
exports.createOneFoodBind = (req, res, next) => {
  delete req.body._id;
  const thing = new FoodBind({
    ...req.body,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "FoodBind correctement enregistrés !",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
};
