import axios from "axios";

export default {
  // Gets all books
  getPosts: function() {
    return axios.get("/api/post");
  },
  // Gets the book with the given id
  // getPosts: function(_id) {
  //   return axios.get("/api/post/" + _id);
  // },
  // Deletes the book with the given id
  deletePosts: function(_id) {
    return axios.delete("/api/post/" + _id);
  },
  // Saves a book to the database
  savePosts: function(postData) {
    return axios.post("/api/post", postData);
  }
};


