import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/post");
  },
  // Gets the post with the given id
  // getPosts: function(_id) {
  //   return axios.get("/api/post/" + _id);
  // },
  // Deletes the post with the given id
  deletePosts: function(_id) {
    return axios.delete("/api/post/" + _id);
  },
  // Saves a post to the database
  savePosts: function(postData) {
    return axios.post("/api/post", postData);
  },

  //User routes
  getUsers: function() {
    return axios.get('/api/user');
  },
  login: function(loginInfo) {
    return axios.post('/api/user/login', loginInfo);
  },
  createAccount: function(userData) {
    return axios.post('/api/user', userData);
  },
  getSingleUser: function(userData) {
    return axios.post('/api/user/:id', userData);
  },
  
  //Reservation routes
  getReservations: function(postData) {
    return axios.post('/api/reservation', postData);
  },
  createReservation: function(reservationData) {
    return axios.post('api/reservation/createnew', reservationData);
  }
  
};


