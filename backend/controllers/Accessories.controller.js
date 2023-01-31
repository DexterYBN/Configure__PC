const Accessories = require("../models/Accessories.model");

module.exports.accessoriesController = {
  createAcces: async (req, res) => {
    const { name, image, description, category, cost } = req.body;
    try {
      const accessories = await Accessories.create({
        name,
        image,
        description,
        category,
        cost,
      });
      return res.status(201).json(accessories);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  getAcces: async (req, res) => {
    try {
      const accessories = await Accessories.find().populate("category");
      return res.json(accessories);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  getAccesById: async (req, res) => {
    try {
      const accessories = await Accessories.findById(req.params.id);
      return res.json(accessories);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  getAccesByCategoryId: async (req, res) => {
    try {
      const accessories = await Accessories.find({
        category: req.params.id,
      }).populate("category");
      return res.json(accessories);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  deleteAcces: async (req, res) => {
    try {
      await Accessories.findByIdAndRemove(req.params.id)
      return res.json("accessories deleted")
    } catch (error) {
      return res.json({ error: error.message })
    }
  },
};
