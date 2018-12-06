import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

import beverageRoute from './routes/beverage.route';
import userRoute from './routes/user.route';

// MongoDB initial Setup
const mongoUrl = 'mongodb://peps95:abc123@ds235840.mlab.com:35840/restaurant-prototype-db'
mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);
mongoose.connection.once(
  'open', 
  console.log.bind(console, '\n\tMongoDB connected\n')
);


// Everything else regarding express, therefore the API
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
app.get('/', (req, res) => res.send('hello from the other side'));
app.use('/beverages', beverageRoute);
app.use('/users', userRoute);
// Start up
app.listen(1234, () => console.log('\n\tServer ON\n'));