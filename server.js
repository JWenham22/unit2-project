const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

const port = process.env.PORT ? process.env.PORT : '3000';
const path = require('path');


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Database connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware to pass user to views
const passUserToView = require('./middleware/pass-user-to-view');
app.use(passUserToView);

// Routes
const authController = require('./controllers/auth');
const teamsController = require('./controllers/teams');
const profileController = require('./controllers/profile');

app.use('/auth', authController);
app.use('/teams', teamsController);
app.use('/profile', profileController);

app.get('/', (req, res) => {
  if (req.session.user) {
    // If user is logged in, pass user data to the index.ejs page
    res.render('index.ejs', { user: req.session.user });
  } else {
    // If user is not logged in, render index.ejs without user data
    res.render('index.ejs', { user: null });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
