const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bread", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const userSeed = [
  {
    _id: 'Beth123',
    firstName: 'Beth',
    lastName: 'Robertson',
    username: 'beth123',
    password: 'dogcat12',
    email: 'beth123@gmail.com',
  },
  {
    _id: 'Jack123',
    firstName: 'Jack',
    lastName: 'Ortega',
    username: 'jack123',
    password: 'givefood',
    email: 'jack123@gmail.com',
  },
];

const postSeed = [
  {
    _id: 'Apples123',
    name: 'Apples',
    description: '10 apples in good condition',
    location: 'Columbus, Ohio',
    quantity: 10,
    user_id: 'Beth123'
  },
  {   
    _id: 'Oranges123',
    name: 'Oranges',
    description: '20 mandarine oranges',
    location: 'Cleveland, Ohio',
    quantity: 20,
    user_id: 'Jack123'
  },
];

const reservationSeed = [
  {
    quantity: 5,
    user_id: 'Jack123',
    post_id: 'Apples123'
  },
  {
    quantity: 10,
    user_id: 'Beth123',
    post_id: 'Oranges123'
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

db.Reservation.deleteMany({})
  .then(() => db.Reservation.collection.insertMany(reservationSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });