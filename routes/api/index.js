const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./users");
const userAccountRoutes = require("./usersAccount");


router.use('/users',userRoutes);
router.use('/userAccount', userAccountRoutes);
router.use('/post', postRoutes);


module.exports = router;

