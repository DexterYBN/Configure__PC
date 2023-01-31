const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));
router.use("/", require("./Categories.route"));
router.use("/", require("./Accessories.route"));
router.use("/", require("./Assembly.route"));
router.use("/", require("./Configure.route"));

module.exports = router;
