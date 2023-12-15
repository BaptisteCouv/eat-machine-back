const Category = require("../models/categoryModel");

// Display all Category
exports.getAllCategory = (req, res, next) => {
    Category.find()
    .then((contracts) => res.status(200).json(contracts))
    .catch((error) => res.status(400).json({ error }));
};


// Create one Category
exports.createOneCategory = (req, res, next) => {
    delete req.body._id;
    const thing = new Category({
      ...req.body,
    });
    thing.save()
      .then(() => {
        res.status(201).json({
          message: "Category correctement enregistrés !",
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(400).json({ error });
      });
  };
  