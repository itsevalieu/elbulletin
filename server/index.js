// Dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Connect to Database
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/elbulletin_db';
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, { useNewUrlParser: true });

// Set Up Server
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Router
app.use('/api', require('./routes/article.js'));

//Listener
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});