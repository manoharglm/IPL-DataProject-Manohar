const fs = require('fs');
let DataBase=fs.readFileSync('./CsvFiles/matches.csv','utf8');
let matches=DataBase.split("\n");
let matches_won={};
let match_id=[];

for(let i=1;i<matches.length;i++){
	let match_data=matches[i].split(",");
		if(matches_won[match_data[1]]){
			matches_won[match_data[1]]++;
		}else{
			if(match_data[1]){
			matches_won[match_data[1]]=1;
			}
		}
	}

	let match_id_function =function(){
		for(let j=1;j<matches.length;j++){
			let match_data=matches[j].split(",");
				if(match_data[1]==2016){
					match_id.push(match_data[0]);
				}
		}
		return match_id;
	}

	console.log(matches_won);
	module.exports={
		match_id_function:match_id_function
	}