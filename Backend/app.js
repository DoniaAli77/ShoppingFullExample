const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./Routes/products");
const userRouter = require("./Routes/users");
const authRouter=require('./Routes/auth')
const {authMiddleware}= require('./Middleware/authenticationMiddleware')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");

  next()
});

app.use('/api/v1',authRouter)
app.use(authMiddleware)
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

const db_name = "lab2";
// * Cloud Connection
// const db_url = `mongodb+srv://TestUser:TestPassword@cluster0.lfqod.mongodb.net/${db_name}?retryWrites=true&w=majority`;
// * Local connection
const db_url = `mongodb://localhost:27017/${db_name}`; // if it gives error try to change the localhost to 127.0.0.1

// ! Mongoose Driver Connection

const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose
  .connect(db_url, connectionOptions)
  .then(() => console.log("mongoDB connected"))
  .catch((e) => {
    console.log(e);
  });

app.use(function (req, res, next) {
  return res.status(404).send("404");
});
app.listen(3000, () => console.log("server started"));
