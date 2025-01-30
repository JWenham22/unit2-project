const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

router.get('/sign-up', (req, res) => {
  res.render('auth/sign-up.ejs');
});

router.get('/sign-in', (req, res) => {
  res.render('auth/sign-in.ejs');
});

router.get('/sign-out', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// POST: Sign Up
router.post('/sign-up', async (req, res) => {
  try {
    // Check if the username or email is already taken
    const userInDatabase = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }]
    });

    if (userInDatabase) {
      return res.send('Username or Email already taken.');
    }
  
    // Check if the password and confirm password match
    if (req.body.password !== req.body.confirmPassword) {
      return res.send('Password and Confirm Password must match');
    }
  
    // Hash the password before storing it
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  
    // Create a new user with email included
    await User.create({
      username: req.body.username,
      email: req.body.email, // Ensure email is stored
      password: hashedPassword
    });
  
    res.redirect('/auth/sign-in');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// POST: Sign In (Allows Username or Email)
router.post('/sign-in', async (req, res) => {
  try {
    const { identifier, password } = req.body; // "identifier" can be username or email

    // Find user by username OR email
    const userInDatabase = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    });

    if (!userInDatabase) {
      return res.send('Login failed. Please try again.');
    }

    // Check if the password matches
    const validPassword = bcrypt.compareSync(password, userInDatabase.password);
    if (!validPassword) {
      return res.send('Login failed. Please try again.');
    }

    // Create a session for the user
    req.session.user = {
      username: userInDatabase.username,
      email: userInDatabase.email,
      _id: userInDatabase._id
    };

    // Redirect to homepage or profile page after signing in
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.redirect('/auth/sign-in'); // Redirect to sign-in page if there's an error
  }
});

module.exports = router;

