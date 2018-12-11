var deliveries = require('./utils.js').deliveries;
var storeInObject = require('./utils.js').storeInObject;
let batsmanStrikeRate = {};
let ballsFaced={};
let topStrikeRate=[];

deliveries.forEach((delivery) => {
            storeInObject(delivery.batsman, 1, ballsFaced);
            storeInObject(delivery.batsman, delivery.batsman_runs, batsmanStrikeRate);
});

Object.keys(batsmanStrikeRate).forEach((key) =>{
    batsmanStrikeRate[key] = ((Number(batsmanStrikeRate[key]) / Number(ballsFaced[key]))*100).toFixed(2);
});
let arr= Object.keys(batsmanStrikeRate).sort((a,b) => (batsmanStrikeRate[b]-batsmanStrikeRate[a]));
let flag=0;
for (let player in arr){
    flag++;
    if(flag>10) break;
    topStrikeRate.push( [arr[player], parseInt(batsmanStrikeRate[arr[player]])]);
}

var fs = require('fs');
fs.writeFile('topStrikeRate.json', JSON.stringify(topStrikeRate), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
console.log(topStrikeRate);