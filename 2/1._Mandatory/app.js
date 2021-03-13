const express = require('express');
const app = express();


app.listen(8080, (error) =>{
    if(error) {
        console.log('Found error: ' , error);
    }
    console.log('Server is running on port: ' , 8080);
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/templates/index.html");
    console.log('Client entered index with status code:',res.statusCode, 'OK');
})

app.get('/express', (req, res) => {
    res.sendFile(__dirname + '/templates/express.html');
    console.log('Client entered index with status code:',res.statusCode, 'OK');
});

app.get('/callback-functions', (req, res) => {
    res.sendFile(__dirname + '/templates/callback.html');
});

app.get('/npm', (req, res) => {
    res.sendFile(__dirname + '/templates/npm.html');
});

app.get('/packagejson', (req,res) => {
    res.sendFile(__dirname + '/templates/packageJSON.html');
});