const { configureController } = require("../controllers/Configure.controllers");
const { Router } = require("express");
const router = Router();

router.get("/configure", configureController.getConfigure);
router.get("/configure/:id", configureController.getConfigureById);
router.post("/configure", configureController.createConfigure);
router.patch("/configure/:id", configureController.editConfigure);
module.exports = router;