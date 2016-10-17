const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: fs.createReadStream('data.arff')
});
console.log('Asset,Cluster');
rl.on('line', function (line) {
	let lineArray = line.split(",");
	let asset = lineArray[1];
	let cluster = lineArray[lineArray.length - 1].split("cluster");
  	console.log(asset+cluster);
});