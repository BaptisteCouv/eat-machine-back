const Meals = require("../models/mealModel");

// Display all meal
exports.getAllMeals = (req, res, next) => {
  Meals.find()
    .then((contracts) => res.status(200).json(contracts))
    .catch((error) => res.status(400).json({ error }));
};

// Create one meal
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

// Display One ---- NAME ---- Meal 
exports.getOneMealName = (req, res, next) => {
  const ids = req.params.id;

  if (!ids) {
    return res.status(400).json({ message: "Aucun ID spécifié." });
  }

  const idArray = Array.isArray(ids) ? ids : [ids];

  Meals.findOne({ _id: { $in: idArray } })
    .then((contracts) => {
      if (contracts.length === 0) {
        return res
          .status(404)
          .json({ message: "Meal name found." });
      }
      res.status(200).json(contracts.name);
    })
    .catch((error) => res.status(400).json({ error }));
};