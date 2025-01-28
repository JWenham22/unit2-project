const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Team = require('../models/team');

// List all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find({});
    res.render('teams/index.ejs', { teams }); // Ensure EJS uses `teams`
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Show form to create a new team
router.get('/new', (req, res) => {
  res.render('teams/new.ejs');
});

// View a specific team
router.get('/:teamId', async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId).populate('comments.user');
    if (!team) throw new Error('Team not found');
    res.render('teams/show.ejs', { team });
  } catch (error) {
    console.log(error);
    res.redirect('/teams');
  }
});

// Create a new team
router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    if (!currentUser) throw new Error('User not found');

    const newTeam = new Team({
      name: req.body.name,
      sport: req.body.sport,
      league: req.body.league,
      users: [currentUser._id],
    });
    await newTeam.save();

    currentUser.teams.push(newTeam._id);
    await currentUser.save();

    res.redirect('/teams');
  } catch (error) {
    console.log(error);
    res.redirect('/teams/new');
  }
});

// Delete a team
router.delete('/:teamId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    if (!currentUser) throw new Error('User not found');

    await Team.findByIdAndDelete(req.params.teamId);
    currentUser.teams = currentUser.teams.filter(
      (teamId) => teamId.toString() !== req.params.teamId
    );
    await currentUser.save();

    res.redirect('/teams');
  } catch (error) {
    console.log(error);
    res.redirect('/teams');
  }
});

module.exports = router;
