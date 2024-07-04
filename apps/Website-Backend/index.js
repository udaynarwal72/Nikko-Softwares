const connectmongo = require("./db.js");
const express = require("express");
const app = express();
const port = 3200;
require('dotenv').config(); // Load environment variables from .env file
const cors = require("cors");

app.use(cors());

app.use(express.json());
connectmongo();

app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});