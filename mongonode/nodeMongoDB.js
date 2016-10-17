require("babel-core/register");
require("babel-polyfill");

(async function testingAsyncAwait() {
    await console.log("For Trump's Sake Print me!");
})();

var MongoClient = require('mongodb').MongoClient;
  
async function getInventoryData() {
    let db = await MongoClient.connect('mongodb://127.0.0.1:27017/networkinventory');
    try {
        let collection = db.collection('inventorydetails');
        return (await collection.find({}).toArray());
    } finally {
        db.close();
    }
}

async function main(){
    try{
        var invdetails = await getInventoryData();
        console.log("invdetails"+invdetails);
     	for (var i = 0; i < invdetails.length; i++) {
    		console.log(JSON.stringify(invdetails[i]));
    	}
    }
    catch(err){
        console.log("error"+err);
    }
}