const express = require("express");
const mongoose = require("mongoose");
const postRouter = require("./routes/post");
const app = express();

app.use(express.json());

app.use("/api/posts", postRouter);

mongoose
  .connect(
    "mongodb://mongo:cFCdED4dDBFGecAHF1c1B2ECeCgGBcgD@viaduct.proxy.rlwy.net:10771"
  )
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("Server listen on port  3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
