const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bread", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const postSeed = [
    {
        name: 'Apples',
        description: '10 apples in good condition',
        location: 'Columbus, Ohio',
        quantity: 10,
        postDate: Date.now,
        user_id: 1
    },
    {
        name: 'Oranges',
        description: '20 mandarine oranges',
        location: 'Cleveland, Ohio',
        quantity: 20,
        postDate: Date.now,
        user_id: 2
    },
];

const userSeed = [
    {
        firstName: 'Beth',
        lastName: 'Robertson',
        username: 'beth123',
        password: 'dogcat12',
        email: 'beth123@gmail.com',
    },
    {
        firstName: 'Jack',
        lastName: 'Ortega',
        username: 'jack123',
        password: 'givefood',
        email: 'jack123@gmail.com',
    },
];

const reservationSeed = [
    {
        post_id: 1,
        post_user_id: 'Beth',
        user_id: 'Jack',
        quantity: 5 
    },
    {
        post_id: 2,
        post_user_id: 'Jack',
        user_id: 'Beth',
        quantity: 10 
    },
];

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