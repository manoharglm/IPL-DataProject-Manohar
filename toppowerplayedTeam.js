var deliveries = require('./utils.js').deliveries;
var matches = require('./utils.js').matches;
var storeInObject = require('./utils.js').storeInObject;

let powerPlay={};
let topPowerPlay=[];
let finalsIdobj={};
let finalsId=[];

matches.forEach((match)  => {
    finalsIdobj[match.season]=match.id;
});
finalsId=Object.values(finalsIdobj);
deliveries.forEach((delivery) => {
    if(finalsId.includes(delivery.match_id) && delivery.over <= 6){
            storeInObject(delivery.batting_team, Number(delivery.total_runs), powerPlay);
    }
});

Object.keys(powerPlay).sort((a,b) => (powerPlay[b]-powerPlay[a])).forEach((pp) =>{
        topPowerPlay.push( [pp, parseInt(powerPlay[pp])]);
    });
var fs = require('fs');
fs.writeFile('topPowerPlay.json', JSON.stringify(topPowerPlay), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
console.log(topPowerPlay);