const Configure = require("../models/Configure.model");

module.exports.configureController = {
    createConfigure: async (req, res) => {
        const {
            name,
            description,
            processor,
            motherboard,
            graphics,
            ram,
            ssd,
            hdd,
            compCase,
            power,
            sound,
            os,
            mouse,
            keyboard,
            monitor,
            headset,
            cost
        } = req.body;

        try {
            const configure = await Configure.create({
                name,
                description,
                processor,
                motherboard,
                graphics,
                ram,
                ssd,
                hdd,
                compCase,
                power,
                sound,
                os,
                mouse,
                keyboard,
                monitor,
                headset,
                cost
            });
            return res.status(201).json(configure);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },
    editConfigure: async (req, res) => {
        const {
            key, value, cost
        } = req.body;

        try {
            const configure = await Configure.findByIdAndUpdate(req.params.id, {
                [key]: value,
                $inc: { cost: cost}
            }, { new: true })
            return res.status(200).json(configure);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },
    getConfigure: async (req, res) => {
        try {
            const configure = await Configure.find().populate('compCase');
            return res.json(configure);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },
    getConfigureById: async (req, res) => {
        try {
            const configure = await Configure.findById(req.params.id)
            return res.json(configure)
        } catch (error) {
            return res.json({ error: error.message });
        }
    }
};
