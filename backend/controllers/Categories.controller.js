const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.status(201).json(categories);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  createCategory: async (req, res) => {
    const { name, image } = req.body;
    try {
      const newCategory = await Category.create({ name, image });
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
