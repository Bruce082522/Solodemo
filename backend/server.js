const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.js");

app.use(cors());
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(3000, () => {
  console.log("server in backend");
});
