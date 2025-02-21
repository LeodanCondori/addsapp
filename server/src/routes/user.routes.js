const { Router } = require('express');
const signupHandler = require("../handlers/userHandler/signupHandler")
const getAllUsersHandler = require("../handlers/userHandler/getAllUsersHandler")
const router = Router();


// router.get("/", signupHandler)
router.get("/", getAllUsersHandler)
router.post("/signup", signupHandler)
// router.get("/", (req, res) =>
// {
//   res.json({ msg: "it works" })
// })

// alternatively
// router.route("/").get(signupHandler)

module.exports = router;
