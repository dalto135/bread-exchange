const router = require("express").Router();
const userRoutes = require("./users")


router.use('/users',userRoutes);
router.use('/userAccount', userAccountRoutes);
router.use('/post', postRoutes)

module.exports = router;
