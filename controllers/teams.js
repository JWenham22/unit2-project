const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Team = require('../models/team')

// List all teams (GET)
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find({users: req.session.user._id})
        res.render('teams/index.ejs', { teams }) // Ensure EJS uses `teams`
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
})

// Show form to create a new team (GET)
router.get('/new', async (req, res) => {
    console.log(req.query.sport)
    try {
        const teams = await Team.find({sport: req.query.sport})
        res.render('teams/new.ejs', { teams }) // Ensure EJS uses `teams`
    } catch (error) {
        console.log(error)
        res.redirect('/teams/new')
    }
})

// View a specific team (GET)
router.get('/:teamId', async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId).populate('comments.user')
    if (!team) throw new Error('Team not found')
    res.render('teams/show.ejs', { team })
  } catch (error) {
    console.log(error)
    res.redirect('/teams')
  }
})

// Create a new team (POST)
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
    console.log(error)
    res.redirect('/teams/new')
  }
  res.redirect(`/teams/new?sport=${req.query.sport}`)
});

// Create a comment for a team (POST)
router.post('/:teamId/comments', async (req, res) => {
  try {
      const { teamId } = req.params
      const { content } = req.body

      if (!req.session.user) {
          return res.status(401).send('You must be logged in to comment.')
      }

      if (!content) {
          return res.status(400).send('Comment cannot be empty.')
      }

      const team = await Team.findById(teamId)
      if (!team) {
          return res.status(404).send('Team not found.')
      }

      // Create the comment object
      const comment = {
          content,
          user: req.session.user._id, 
      }

      team.comments.push(comment)
      await team.save()

      res.redirect(`/teams/${teamId}`)
  } catch (error) {
      console.error(error)
      res.redirect(`/teams/${req.params.teamId}`)
    }
})

// Edit a comment (PUT)
router.put('/:teamId/comments/:commentId', async (req, res) => {
  try {
      const { teamId, commentId } = req.params
      const { content } = req.body

      if (!req.session.user) {
          return res.status(401).send('You must be logged in to edit a comment.')
      }

      const team = await Team.findById(teamId)
      if (!team) {
          return res.status(404).send('Team not found.')
      }

      const comment = team.comments.id(commentId)
      if (!comment) {
          return res.status(404).send('Comment not found.')
      }

      // Ensure the logged-in user is the owner of the comment
      if (comment.user.toString() !== req.session.user._id.toString()) {
          return res.status(403).send('You can only edit your own comments.')
      }

      // Update the comment
      comment.content = content
      await team.save()

      res.redirect(`/teams/${teamId}`)
  } catch (error) {
      console.error(error)
      res.redirect(`/teams/${teamId}`)
  }
});

// Delete a comment (DELETE)
router.delete('/:teamId/comments/:commentId', async (req, res) => {
  try {
      const { teamId, commentId } = req.params

      if (!req.session.user) {
          return res.status(401).send('You must be logged in to delete a comment.')
      }

      const team = await Team.findById(teamId)
      if (!team) {
          return res.status(404).send('Team not found.')
      }

      // Ensure the comment exists
      const comment = team.comments.id(commentId)
      if (!comment) {
          return res.status(404).send('Comment not found.')
      }

      // Ensure the logged-in user is the owner of the comment
      if (comment.user.toString() !== req.session.user._id.toString()) {
          return res.status(403).send('You can only delete your own comments.')
      }

      // Check if comments exist before pulling
      if (team.comments && team.comments.length > 0) {
          team.comments = team.comments.filter(c => c._id.toString() !== commentId);
          await team.save();
      }

      res.redirect(`/teams/${team._id}`);
  } catch (error) {
      console.error(error)
      res.redirect('/teams')
  }
});




// Delete a team (DELETE)
router.delete('/:teamId', async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId)
    console.log(team)
    team.users.remove(req.session.user._id)
    await team.save()
  } catch (error) {
      console.log(error)
      res.redirect('/teams')
    }
  res.redirect(`/teams`)
});


module.exports = router
