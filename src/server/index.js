import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'


const app = express();
// lets us use .env filees to hide our port and connection url
dotenv.config()

// lets us upload images to our db
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// here we use our user routes
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.CONNECTION_URL

// connect to db
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
mongoose.set('useFindAndModify', false);
