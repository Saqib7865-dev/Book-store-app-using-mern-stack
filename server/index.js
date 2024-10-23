require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const booksRoute = require("./routes/booksRoute");
app.use(cors());
app.use(express.json());
app.use("/books", booksRoute);
// Home route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to MERN stack application" });
});
// DB Connection and server execution
mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, () => {
      console.log("App is running at port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
