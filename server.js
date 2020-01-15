const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(cors());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.get("/home", logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const timeStamp = Date.now();
  console.log("logging the req", req.url, timeStamp, req.method);
  next();
}

module.exports = server;
