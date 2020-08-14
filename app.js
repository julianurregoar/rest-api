require('dotenv-flow').config();
const express = require('express');
const { connectDB } = require('./db');
const apiRoutes = require('./routes');
const isAuth = require('./middleware/isAuth');
const morgan = require('morgan');
const app = express();

// connect database
connectDB();

// port
app.set('PORT', process.env.PORT || 5000);

// cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// middlewares
app.use(express.json({ extended: false })); /// ??
app.use(isAuth);
app.use(morgan('dev'));

// api routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('API running'));

module.exports = app;
