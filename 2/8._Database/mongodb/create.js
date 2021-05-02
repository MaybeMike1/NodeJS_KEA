/* Implement create as a self-containing script that create a document in the breweries 
collection */

const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017";

const dbName = "beers";
const client = new MongoClient(url);

MongoClient.connect(url,  {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw new Error();
    }
    console.log('Connected Succesfully to server');

    const db = client.db(dbName);
    const breweries = db.collection("breweries");
    breweries.insertOne({name: "Carlsberg", type: "IPA", alcoProcentage: 5.2}, (error, result) => {
        if (error) {
            throw new Error(error);
        }
        console.log(result);
        
        client.close();
    });
    
    
}); 


