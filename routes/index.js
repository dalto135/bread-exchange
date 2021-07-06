const router = require("express").Router();
const io = require('socket.io');
const apiRoutes = require('./api');

router.use("/api",apiRoutes);

module.exports = router;
