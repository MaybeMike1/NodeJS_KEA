const express = require('express');
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, (error) => {
    if(error){
        console.log('Found error', error);
    }
    console.log('Server is running on port: ', 8080);
});