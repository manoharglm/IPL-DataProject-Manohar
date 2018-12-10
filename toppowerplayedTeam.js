var deliveries = require('./utils.js').deliveries;
var matches = require('./utils.js').matches;
var storeInObject = require('./utils.js').storeInObject;

let powerPlay={};
let topPowerPlay={};
let currSeason=0;
let finalsId=[];
finalsId=matches.map((match) => {
    if(match.season !== currSeason){
        currSeason = match.season;
            return (match.id - 1);
    }
}).filter( Boolean );

deliveries.forEach((delivery) => {
    if(finalsId.includes(parseInt(delivery.match_id))){
        if(delivery.over >= 1 && delivery.over <= 6){
            storeInObject(delivery.batting_team, parseInt(delivery.total_runs), powerPlay);
        }
    }
});

Object.keys(powerPlay).sort((a,b) => (powerPlay[b]-powerPlay[a])).forEach((pp) => topPowerPlay[pp]=powerPlay[pp]);
console.log(topPowerPlay);