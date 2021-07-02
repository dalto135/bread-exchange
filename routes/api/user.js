const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");
// const userPage = require("../../controller/foodExchangeController");

router.route('/')
.get(foodExchangeController.getUsers)
.post(foodExchangeController.createUserAccount);

router.route('/login')
.post(foodExchangeController.getSingleUser);



// const { User } = require('../../models');



// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
// });

//Retrieve information of all users
// router.get('/', (req, res) => {
//     User.find({})
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.status(404).json(err.message);
//       });
//   });

// router.post('/login', async (req, res) => {
//     try {
//         const userData = await User.findOne({ username: req.body.username })
        
//         console.log('userData');
//         console.log(userData);

//         res.json(userData);
//     }
//     catch (err) {
//         res.status(404).json(err.message);
//     }
// });

//Create new Book
// router.post('/', (req, res) => {
//     User.create(req.body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.status(400).json(err.message);
//     });
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;