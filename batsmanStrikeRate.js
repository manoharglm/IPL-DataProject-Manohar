// const fs = require('fs');
// let deliveries = JSON.parse(fs.readFileSync('./resources/deliveries.json', 'utf8'));
var deliveries = require('./utils.js').deliveries;
var storeInObject = require('./utils.js').storeInObject;
let batsmanStrikeRate = {};
let ballsFaced={};
let topStrikeRate={};

deliveries.forEach((delivery) => {
            storeInObject(delivery.batsman, 1, ballsFaced);
            storeInObject(delivery.batsman, delivery.batsman_runs, batsmanStrikeRate);
});


Object.keys(batsmanStrikeRate).forEach((key) =>{
    batsmanStrikeRate[key] = (Number(batsmanStrikeRate[key]) / Number(ballsFaced[key]))*100;
});
Object.keys(batsmanStrikeRate).sort((a,b) => (batsmanStrikeRate[b]-batsmanStrikeRate[a])).forEach((sr) => topStrikeRate[sr]=batsmanStrikeRate[sr] );

console.log(topStrikeRate);