const express = require("express");
const path = require("path");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.delete("/item/:id", (req, res) => {
  const { id } = req.params;

  res.send(`Usted quiere eliminar el item: ${id}`);
});

router.get("/", adminController.admin);
router.get("/create", adminController.create);
router.post("/create", adminController.create);
router.get("/edit/:id", adminController.edit);
router.put("/edit/:id", adminController.edit);
router.delete("/delete/:id", adminController.delete);

module.exports = router;
