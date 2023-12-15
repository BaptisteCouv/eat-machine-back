const Meals = require("../models/mealModel");

// Display all contracts
exports.getAllMeals = (req, res, next) => {
  Meals.find()
    .then((contracts) => res.status(200).json(contracts))
    .catch((error) => res.status(400).json({ error }));
};

// Create one contract
exports.createMeal = (req, res, next) => {
  delete req.body._id;
  const thing = new Meals({
    ...req.body,
  });
  thing.save()
    .then(() => {
      res.status(201).json({
        message: "Contrat et paidAcquired correctement enregistrés !",
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ error });
    });
};
