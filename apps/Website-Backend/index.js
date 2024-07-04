import connectmongo from "./db.js";
import express, { json } from "express";
const app = express();
const port = 3200;
require('dotenv').config(); // Load environment variables from .env file
import cors from "cors";

app.use(cors());

app.use(json());
connectmongo();

app.use('/api/auth',require('./routes/auth').default)

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
