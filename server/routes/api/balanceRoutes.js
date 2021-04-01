const router = require("express").Router();
const balanceController = require("../../controller/balancedb");

router.route("/balance")
.post(balanceController.create)

router.route("/balance/:username")
  .get(balanceController.findAll);

  module.exports = router;
