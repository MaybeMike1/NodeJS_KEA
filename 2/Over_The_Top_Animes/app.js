const express = require('express');
const app = express();


let anime_names = [
    {
        id : 1,
        title : "Attack On Titan",
        weirdness : 6.8
    },
    {
        id : 2,
        title : "One Punch Man",
        protangonist : "Saitama"
    }
];


app.get("/animenames", (req, res) =>  {
    res.send({animenames : anime_names});
});

app.get("/animenames/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const foundAnimeName = anime_names.find(anime_names => anime_names.id === id)
    res.send({anime : foundAnimeName});
});


app.listen(8080, (error) => {
    if(error) {
        console.log(error)
    } 
    console.log("Server running on port", 8080);
});