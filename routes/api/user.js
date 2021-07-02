const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");
const userPage = require("../../controller/foodExchangeController");

// router.route("/");

const { User } = require('../../models');



router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ username: req.body.username } )
    // .then(dbUser => {
    //     res.json(dbUser);
    // })
    console.log('userData');
    console.log(userData);
    res.json(userData);
    }
    catch (err) {
        res.status(404).json(err.message);
    };

    // if (!userData) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect username or password, please try again' });
    //   return;
    // }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData._id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     res.status(400).json(err.message);
//   }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;