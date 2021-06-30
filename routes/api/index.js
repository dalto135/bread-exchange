const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");
const userAccountRoutes = require("./usersAccount");


router.use("/user", userRoutes);
router.use("/userAccount", userAccountRoutes);
router.use("/post", postRoutes);


module.exports = router;

