const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const data = require('./data')
const Team = require('./models/team')
async function addSportsTeams() {
    for (team of data) {
        const exists = await Team.findOne({name: team.name})
        if (!exists) {
            const newTeam = await Team.create(team)
            console.log(newTeam) 
        }
    }
    console.log('finished')
}

addSportsTeams()