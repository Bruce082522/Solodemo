const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.js");
app.use(express.json());

app.use(cors());
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// app.get("/api/products/id", (req, res) => {
//   res.send(data.products);
// });

app.post("/sign-in", (req, res) => {
  try {
    console.log(req.body);
    // use email to find the user in db
    res.status(201).json({
      // return username also
      username: req.body.username,
      password: req.body.password,
    });
  } catch (e) {
    res.status(400).json("error for sign in: ", e);
  }
});

app.listen(3000, () => {
  console.log("server in backend");
});
