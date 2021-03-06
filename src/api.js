const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
import chai, { assert } from "chai";
import chaiHttp from "chai-http";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
console.log(port);
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://BryanYap:97991712Ff@cluster0.s0cjc.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

const usersRouter = require("./routes/users");

app.use("/.netlify/functions/api/users", usersRouter);

chai.use(chaiHttp);

module.exports.handler = serverless(app);
