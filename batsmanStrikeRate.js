const fs = require('fs');
let deliveries = JSON.parse(fs.readFileSync('./resources/deliveries.json', 'utf8'));
let batsmanStrikeRate = {};
let ballsFaced={};
let topStrikeRate={};

function storeInObject(key, value, obj){
    if(obj[key]){
        obj[key]+= Number(value);
    }
    else{
        if(key){
            obj[key]=Number(value);
        }
    }
}

deliveries.forEach((delivery) => {
            storeInObject(delivery.batsman, 1, ballsFaced);
            storeInObject(delivery.batsman, delivery.batsman_runs, batsmanStrikeRate);
});


Object.keys(batsmanStrikeRate).forEach((key) =>{
    batsmanStrikeRate[key] = (Number(batsmanStrikeRate[key]) / Number(ballsFaced[key]))*100;
});
Object.keys(batsmanStrikeRate).sort((a,b) => (batsmanStrikeRate[b]-batsmanStrikeRate[a])).forEach((sr) => topStrikeRate[sr]=batsmanStrikeRate[sr] );

console.log(topStrikeRate);