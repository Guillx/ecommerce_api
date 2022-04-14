const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Base de datos funcionando"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("Test correcto");
});

app.listen(process.env.PORT || 5050, () => {
  console.log("Servidor Backend funcionando");
});
