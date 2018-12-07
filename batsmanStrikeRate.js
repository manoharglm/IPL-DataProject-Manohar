const fs = require('fs');
let DataBase = fs.readFileSync('./resources/deliveries.csv', 'utf8');
let matches = DataBase.split("\n");
let batsmanStrikeRate = {};
let ballsFaced={};
let topStrikeRate=[];

for (let i = 1; i < matches.length; i++) {
    let matchData = matches[i].split(",");
    let runs=matchData[15];
    let balls=matchData[6];
    if(ballsFaced[balls]){
        ballsFaced[balls]++;
    }else{
        if(balls){
            ballsFaced[balls]=1;   
        }
    }
    if(batsmanStrikeRate[balls]){
        batsmanStrikeRate[balls]+=Number(runs);
    }else{
            if(runs){
                batsmanStrikeRate[balls]=Number(runs);        
            }
        }    
}

let keys = Object.keys(batsmanStrikeRate);
for (let key in keys) {
    batsmanStrikeRate[keys[key]] = (Number(batsmanStrikeRate[keys[key]]) / Number(ballsFaced[keys[key]]))*100;
}
topStrikeRate = keys.sort(function(a, b) {
    return (batsmanStrikeRate[b]-batsmanStrikeRate[a]);
});
topStrikeRate=topStrikeRate.map((str)=> [str, batsmanStrikeRate[str]]);


console.log(topStrikeRate);