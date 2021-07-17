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
  getPostByID: function(postData) {
    return axios.get('api/post/' + postData._id);
  },
  updatePost: function(postData) {
    return axios.put('api/post/' + postData._id);
  },
  findByUserID: function(postData) {
    return axios.post('/api/post/userid', postData);
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
    return axios.post('/api/user/byid', userData);
  },
  editAccount: function(userData) {
    return axios.put('/api/user', userData);
  },
  userInfo: function() {
    return axios.get('/api/user/info');
  },
  logout: function() {
    return axios.post('/api/user/logout');
  },
  getUserByUsername: function(userData) {
    return axios.post('/api/user/username', userData);
  },
  
  //Reservation routes
  getAllReservations: function(reservationData) {
    return axios.get('/api/reservation', reservationData);
  },
  getReservations: function(postData) {
    return axios.post('/api/reservation', postData);
  },
  getUserReservations: function(userData) {
    return axios.post('/api/reservation/userreservations', userData);
  },
  createReservation: function(reservationData) {
    return axios.post('api/reservation/createnew', reservationData);
  },
  removeReservation: function(reservationData) {
    return axios.delete('api/reservation/' + reservationData);
  },
  getSingleReservation: function(reservationData) {
    return axios.get('api/reservation/' + reservationData);
  },
  updateReservation: function(reservationData) {
    return axios.put('api/reservation/update/' + reservationData);
  },
  
};
