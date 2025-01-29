const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Team = require('../models/team');

// List all teams
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find({users: req.session.user._id});
        res.render('teams/index.ejs', { teams }); // Ensure EJS uses `teams`
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// Show form to create a new team
router.get('/new', async (req, res) => {
    console.log(req.query.sport)
    try {
        const teams = await Team.find({sport: req.query.sport});
        res.render('teams/new.ejs', { teams }); // Ensure EJS uses `teams`
    } catch (error) {
        console.log(error);
        res.redirect('/teams/new');
    }
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
router.post('/:teamId', async (req, res) => {
  try {
   const team = await Team.findById(req.params.teamId)
   console.log(team)
   if (team.users.includes(req.session.user._id)) {
    team.users.remove(req.session.user._id)
   } else {
       team.users.push(req.session.user._id)
   }
   await team.save()
  } catch (error) {
    console.log(error);
    res.redirect('/teams/new');
  }
  res.redirect(`/teams/new?sport=${req.query.sport}`)
});

// Delete a team
router.delete('/:teamId', async (req, res) => {
    try {
        const team = await Team.findById(req.params.teamId)
        console.log(team)
        team.users.remove(req.session.user._id)
        await team.save()
       } catch (error) {
         console.log(error);
         res.redirect('/teams');
       }
       res.redirect(`/teams`)
});


module.exports = router;
