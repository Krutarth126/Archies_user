const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
const UserSchema = require("./dbModule.js");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(Cors());
app.use((req, res, next) => {
  res.setHeader("Acess-control-allow-origin", "*"),
    res.setHeader("Acess-control-allow-Header", "*");
  next();
});

const databaseConnection =
  "mongodb+srv://Admin:yashyash@cluster0.henjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(databaseConnection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", async (req, res) => {
  const result = await UserSchema.find();
  res.status(200).send(result);
});

app.post("/user/post", (req, res) => {
  const userPost = req.body;

  UserSchema.create(userPost, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`listening at localhost ${port}`);
});
