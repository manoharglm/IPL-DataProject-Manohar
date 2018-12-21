const express = require('express')
var path = require('path')


let luckiestTeam= require('./resources/luckiestTeam.js');
let strikeRate= require('./resources/batsmanStrikeRate.js');
let deathBowlers= require('./resources/topDeathBowlers.js');
let powerPlay= require('./resources/toppowerplayedTeam.js');


const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'resources')))
app.listen(port, () => console.log(`App listening on port ${port}!`))


app.get('/luckiestTeam', function (req, res) {
    res.json(luckiestTeam.luckiestTeamFunction());
});

app.get('/strikeRate', function (req, res) {
    res.json(strikeRate.strikeRateFunction());
});

app.get('/deathBowlers', function (req, res) {
    res.json(deathBowlers.deathBowlersFuction());
});

app.get('/powerPlay', function (req, res) {
    res.json(powerPlay.powerPlayFunction());
});