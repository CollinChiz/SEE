const router = require("express").Router();
const balanceRoutes = require("./balanceRoutes");

router.use("/balanceRoutes", balanceRoutes);

module.exports = router;