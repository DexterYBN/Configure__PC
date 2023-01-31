const {
  accessoriesController,
} = require("../controllers/Accessories.controller");
const { Router } = require("express");
const router = Router();

router.get("/accessories", accessoriesController.getAcces);
router.get("/accessories/:id", accessoriesController.getAccesById);
router.get("/category/:id", accessoriesController.getAccesByCategoryId);
router.post("/accessories", accessoriesController.createAcces);
router.delete("/accessories/:id", accessoriesController.deleteAcces);

module.exports = router;
