const fs = require('fs');
var  match_id = require('./matchesPlayedPerYear.js').match_id_function_2015();
let DataBase=fs.readFileSync('./CsvFiles/deliveries.csv','utf8');
let deliveries=DataBase.split("\n");
let economy={}
let overs={}

let count=0;
for(let i=1;i<deliveries.length;i++){
		let match_data=deliveries[i].split(",");
			if(parseInt(match_data[0])>match_id[0] && parseInt(match_data[0])<match_id[match_id.length-1]){
					if(overs[match_data[8]]){
						if(count!=match_data[4]){
							overs[match_data[8]]++;
							count=match_data[4];
							}
					}else{
						overs[match_data[8]]=1;						
					}
				if(economy[match_data[8]]){
					economy[match_data[8]]+=(Number(match_data[10])+Number(match_data[13])+Number(match_data[15]));

				}
			else{
				if(match_data[8]) {
					economy[match_data[8]]=Number(match_data[10])+Number(match_data[13])+Number(match_data[15]);
			}
		}
	}
}
	economy_keys=Object.keys(economy);
	for(let j in economy_keys){
		economy[economy_keys[j]]=(Number(economy[economy_keys[j]])/Number(overs[economy_keys[j]]));
	}
/*keysSorted = Object.keys(economy).sort(function(a,b){return economy[a]-economy[b]}).map(key => economy[key]);*/


console.log(economy);
