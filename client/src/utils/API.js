import axios from "axios";

export default {
  // Gets all books
  getPosts: function() {
    return axios.get("/api/post");
  },
  // Gets the book with the given id
  getPosts: function(user_id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deletePosts: function(_id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  savePosts: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
