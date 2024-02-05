const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { config } = require("dotenv");

const uri = process.env.DB_URI;

// const uri = `mongodb+srv://todo-app:4llVqiIdGLc3Syqw@cluster0.7em2cfy.mongodb.net/Todo-App?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(cors());
app.use(express.json());

//database and routes
const run = async () => {
  try {
    // database name
    const db = client.db("Todo-App");

    //database collection name
    const todoCollection = db.collection("todos");
  } finally {
    //
  }
};
run();

app.get("/", (req, res) => {
  res.send({
    success: true,
    status: 200,
    server:'Todo-App'
  });
});
app.listen(port, () => {
  console.log(`Welcome to Todo App: from ==> ${port}`);
});
