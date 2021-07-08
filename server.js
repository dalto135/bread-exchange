require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session');
// const cookieSession = require('cookie-session');
const sess = {
  secret: process.env.sessionKey,
  resave: false,
  saveUninitialized: false
}



app.use(session(sess));
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);
const STATIC_CHANNELS = []

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

io.on('connection', (socket) => {
  console.log('new client connected', socket.id);
  socket.emit('connection', null);
  socket.on('channel-join', id => {
    console.log('channel join', id);
    STATIC_CHANNELS.forEach(c => {
      if (c.id === id) {
        if (c.sockets.indexOf(socket.id) == (-1)) {
          c.sockets.push(socket.id);
          c.participants++;
          io.emit('channel', c);
        }
      } else {
        let index = c.sockets.indexOf(socket.id);
        if (index != (-1)) {
          c.sockets.splice(index, 1);
          c.participants--;
          io.emit('channel', c);
        }
      }
    });
    return id;
  });
  socket.on('send-message', message => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    STATIC_CHANNELS.forEach(c => {
      let index = c.sockets.indexOf(socket.id);
      if (index != (-1)) {
        c.sockets.splice(index, 1);
        c.participants--;
        io.emit('channel', c);
      }
    });
  });
  app.get('/getChannels', (req, res) => {
    res.json({
      channels: STATIC_CHANNELS
    })
  });
});

httpServer.listen(PORT, () => {
  console.log(`🌎 ==> API server now at http://localhost:${PORT}`);
});
