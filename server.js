const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');

const authController = require('./controllers/auth.js');
const Team = require('./models/team.js');

const port = process.env.PORT ? process.env.PORT : '3000';

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.render('index.ejs', {
    user: req.session.user,
  });
});

app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find({})
    res.render('teams/library.ejs', { teams })
  } catch (err) {
    console.error(err) 
    res.status(500).send('Interval Server Error')
  }
})

app.get('/teams/new', (req, res) => {
  res.render('teams/new.ejs')
})

// app.get('/teams', (req, res) => {
//   res.send('Welcome to the index page!')
// })


app.post('/teams', async (req, res) => {
  // console.log(req.body)
  res.redirect('/teams/new')
})

app.post('/teams', async (req, res) => {
  res.redirect('/teams')
})

// app.get('/vip-lounge', (req, res) => {
//   if (req.session.user) {
//     res.send(`Welcome to the party ${req.session.user.username}.`);
//   } else {
//     res.send('Sorry, no guests allowed.');
//   }
// });

app.use('/auth', authController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
