const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const io = require('socket.io');

app.use(logger('dev'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bread", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now at http://localhost:${PORT}`);
});


io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
  socket.on('join',function(data) {
    socket.join(data.username);
  });
    console.log('new client connected');
});

