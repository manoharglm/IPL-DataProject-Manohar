const fs = require('fs');
let matchesDB = fs.readFileSync('./resources/matches.csv', 'utf8');
let deliveriesDB = fs.readFileSync('./resources/deliveries.csv', 'utf8');

let matches = matchesDB.split("\n");
let deliveries = deliveriesDB.split("\n");
let powerPlay={};
let currSeason=0;
let matchData=[];
let season=0;
let finalsId=[];


for (let match = 1; match < matches.length; match++) {
    matchData = matches[match].split(",");
    season=matchData[1];
    if(season!==currSeason){
        currSeason=season;
        if(currSeason==0){
            continue;
        }
        else{
            matchData=matches[match-1].split(",");
            finalsId.push(matchData[0]);
        }
    }
}

for(let delivery=1; delivery<deliveries.length;delivery++){
    deliveryData = deliveries[delivery].split(",");
    matchid=deliveryData[0];
    over=deliveryData[4];
    runs=deliveryData[17];
    team=deliveryData[2];
    if(finalsId.includes(matchid)){
        if(Number(over)>=1 && Number(over)<=6){
            if(powerPlay[team]){
                powerPlay[team]+= Number(runs);
            }
            else{
                if(team){
                    powerPlay[team]=Number(runs);
                }
            }
        }
    }
}

let topPowerPlayTeam=Object.keys(powerPlay).sort((a,b)=> (powerPlay[b]-powerPlay[a]));
topPowerPlayTeam=topPowerPlayTeam.map((pp)=> [pp, powerPlay[pp]]);

console.log(topPowerPlayTeam);