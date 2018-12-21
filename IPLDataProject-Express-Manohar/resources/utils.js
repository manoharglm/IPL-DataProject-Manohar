const fs = require('fs');

let matches = JSON.parse(fs.readFileSync('/home/manohar/Documents/MountBlue/iplDataset/IPL_DataProject/resources/matches.json', 'utf8'));
let deliveries = JSON.parse(fs.readFileSync('/home/manohar/Documents/MountBlue/iplDataset/IPL_DataProject/resources/deliveries.json', 'utf8'));

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
module.exports = {
    storeInObject: storeInObject,
    matches:matches,
    deliveries:deliveries
}