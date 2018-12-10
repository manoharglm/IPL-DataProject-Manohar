const fs = require('fs');
let matches = JSON.parse(fs.readFileSync('./resources/matches.json', 'utf8'));
let deliveries = JSON.parse(fs.readFileSync('./resources/deliveries.json', 'utf8'));
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

function storeInObject(key, value){
    if(powerPlay[key]){
        powerPlay[key]+= Number(value);
    }
    else{
        if(key){
            powerPlay[key]=Number(value);
        }
    }
}
deliveries.forEach((delivery) => {
    if(finalsId.includes(parseInt(delivery.match_id))){
        if(delivery.over >= 1 && delivery.over <= 6){
            storeInObject(delivery.batting_team, parseInt(delivery.total_runs));
        }
    }
});

Object.keys(powerPlay).sort((a,b) => (powerPlay[b]-powerPlay[a])).forEach((pp) => topPowerPlay[pp]=powerPlay[pp]);
console.log(topPowerPlay);