const Assembly = require("../models/Assembly.model");

module.exports.assemblyController = {
  createAssembly: async (req, res) => {
    const {
      name,
      description,
      price,
      processor,
      motherboard,
      graphics,
      ram,
      ssd,
      hdd,
      power,
      compCase,
      image,
      cost,
    } = req.body;

    try {
      const assembly = await Assembly.create({
        name,
        description,
        price,
        processor,
        motherboard,
        graphics,
        ram,
        ssd,
        hdd,
        power,
        compCase,
        image,
        cost,
      });
      return res.status(201).json(assembly);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  getAssembly: async (req, res) => {
    try {
      const assembly = await Assembly.find();
      return res.json(assembly);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
