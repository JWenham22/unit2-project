const express = require('express');
const User = require('../models/user.js');

const router = express.Router();

// GET: Show the user's profile page
router.get('/', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/sign-in'); // Redirect to sign-in if not logged in
    }

    const user = await User.findById(req.session.user._id);
    if (!user) {
        return res.redirect('/auth/sign-in'); // Redirect if user not found
    }

    res.render('profile.ejs', { user });
});

// GET: Show the Edit Profile Page
router.get('/edit', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/sign-in');
    }
    const user = await User.findById(req.session.user._id);
    res.render('edit.ejs', { user });
});

// POST: Handle Profile Update
router.post('/update', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/sign-in');
    }

    try {
        // Check if the new email is already taken by another user
        if (req.body.email) {
            const emailExists = await User.findOne({ email: req.body.email, _id: { $ne: req.session.user._id } });
            if (emailExists) {
                return res.send('This email is already in use by another account.');
            }
        }

        // Prepare update data
        const updates = {
            email: req.body.email, // Update email if provided
            bio: req.body.bio,
            favoriteTeams: req.body.favoriteTeams.split(',').map(team => team.trim())
        };

        // Update user in the database
        const updatedUser = await User.findByIdAndUpdate(req.session.user._id, updates, { new: true });

        // Update session with new email
        req.session.user.email = updatedUser.email;

        // Redirect back to profile
        res.redirect('/profile');
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).send('An error occurred while updating your profile. Please try again.');
    }
});

module.exports = router;


