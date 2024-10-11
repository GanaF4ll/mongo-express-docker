import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3201;

const uri = process.env.MONGODB_URI as string;

mongoose
  .connect(uri)
  .then(() => console.log("timer-db connected"))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`timer-service is running on port ${port}`);
});