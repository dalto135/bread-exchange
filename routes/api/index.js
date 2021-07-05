const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");
const userAccountRoutes = require("./usersAccount");
const reservationRoutes = require('./reservation');


router.use("/user", userRoutes);
router.use("/userAccount", userAccountRoutes);
router.use("/post", postRoutes);
router.use('/reservation', reservationRoutes);

module.exports = router;

