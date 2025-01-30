const User = require('../models/user'); // Import the User model

async function passUserToView(req, res, next) {
    if (req.session.user) {
        try {
            // Fetch the latest user data from the database
            const user = await User.findById(req.session.user._id);

            if (user) {
                // Store updated user info in res.locals
                res.locals.user = {
                    _id: user._id,
                    username: user.username,
                    profilePic: user.profilePic || '/images/default-profile.png',
                    bio: user.bio || '',
                    favoriteTeams: user.favoriteTeams || []
                };

                // Update session user object to reflect changes
                req.session.user = res.locals.user;
            } else {
                res.locals.user = null;
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
            res.locals.user = null;
        }
    } else {
        res.locals.user = null;
    }

    next();
}

module.exports = passUserToView;
