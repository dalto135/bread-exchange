const router = require("express").Router();
const postRoutes = require("./Post");
const reservationRoutes = require('./Reservation');
const userRoutes = require("./Users");
// const userAccountRoutes = require("./usersAccount");



// router.use('/userAccount', userAccountRoutes);
router.use('/post', postRoutes);
router.use('/reservation', reservationRoutes);
router.use('/user', userRoutes);


module.exports = router;

