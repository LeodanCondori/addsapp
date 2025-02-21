const { Router } = require('express');
const getAllAdvertsHandler = require("../handlers/advertHandler/getAllAdvertsHandler")
const router = Router();

router.get("/", getAllAdvertsHandler)

// alternatively
// router.route("/").get(getAllAdvertsHandler)

module.exports = router;
