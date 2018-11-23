const fs = require('fs');
var  match_id = require('./matchesPlayedPerYear.js').match_id_function();
let DataBase=fs.readFileSync('./CsvFiles/deliveries.csv','utf8');
let deliveries=DataBase.split("\n");
let extras={}
for(let i=1;i<deliveries.length;i++){
		let match_data=deliveries[i].split(",");
			if((parseInt(match_data[0])>=match_id[0]) && parseInt(match_data[0])<=match_id[match_id.length-1]){
				if(extras[match_data[2]]){
					extras[match_data[2]]=Number(extras[match_data[2]])+Number(match_data[16]);
				}
			else{
				extras[match_data[2]]=Number(match_data[16]);
			}
		}
}
console.log(extras);
