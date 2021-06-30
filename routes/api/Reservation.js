const router = require("express").Router();
const { Reservation } = require('../../models');

//Retrieve information of all reservations
router.get('/', (req, res) => {
   Reservation.find({})
   .then(reservation => {
     res.json(reservation);
   })
   .catch(err => {
     res.status(404).json(err.message);
   })
})

//Make a new reservation
router.post('/', (req, res) => {
    Reservation.create(req.body)
    .then(reservation => {
      res.json(reservation);
    })
    .catch(err => {
      res.status(404).json(err.message);
    })
 })

//Delete reservation by id
router.delete('/:id', (req, res) => {
    Reservation.remove({_id: req.params.id},
        function(err, result) {
            if (err) {
                res.send(err.message);
            } else {
                res.json(result);
            }
        }
    )
})


module.exports = router;