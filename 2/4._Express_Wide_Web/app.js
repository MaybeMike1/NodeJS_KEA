const express = require('express');
const app = express();


console.log(__dirname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    
})
app.listen(8080, (error) => {
    if(error) {
        console.log(error)
    }
    console.log("server is running on port: ", 8080);
});