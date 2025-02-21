const { Router } = require('express');
const userRouter = require("./user.routes")
const advertRouter = require("./advert.routes")


const router = Router();

router.use("/adverts", advertRouter)
router.use("/user", userRouter)

module.exports = router;
