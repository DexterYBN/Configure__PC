const { assemblyController } = require("../controllers/Assembly.controller");
const { Router } = require("express");
const router = Router();

router.get("/assembly", assemblyController.getAssembly);
router.post("/assembly", assemblyController.createAssembly);

module.exports = router;