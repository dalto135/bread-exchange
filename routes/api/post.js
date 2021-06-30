const router = require("express").Router();

const foodExchangeController = require("../../controller/foodExchangeController.js");

router.route("/")
.get(foodExchangeController.findAll)
.post(foodExchangeController.create);

//router.route("/Posts")/
//.get(foodExchangeController.findAll)
//.put(foodExchangeController.update);

//router.route("/singlepost")
//.get(foodExchangeController.findById)
//.put(foodExchangeController.update)
//.delete(foodExchangeController.remove);


//router.route("/UserPage")
//.get(foodExchangeController.findById)
//.put(foodExchangeController.update)
//.delete(foodExchangeController.remove);


module.exports = router;
