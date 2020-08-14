const express = require('express');
const userRoutes = require('./users');

const app = express();

app.use('/user', userRoutes);

module.exports = app;
