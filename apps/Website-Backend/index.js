const connectmongo = require("./db.js");
const express = require("express");
const app = express();
const port = 3200;
require('dotenv').config(); // Load environment variables from .env file
const cors = require("cors");

app.use(cors());

app.use(express.json());
connectmongo();

//index

app.use('/api/auth',require('./routes/auth'))
app.use('/api/section',require('./routes/section'))
app.use('/api/master',require('./routes/master'))
app.use('/api/vocher',require('./routes/vocherentry'))
app.use('/api/itemlist',require('./routes/itemlist'))
app.use('/api/cashbook',require('./routes/cashbook'))
app.use('/api/ledger',require('./routes/ledger'))

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
