const express = require("express");
const app = express();
const port = 3005;
const cors = require("cors");
const path = require("path");

//requirements

// use
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));

// server routing

// listening
app.listen(port, () => {
  console.log(`app hanging out at ${port}`);
});
