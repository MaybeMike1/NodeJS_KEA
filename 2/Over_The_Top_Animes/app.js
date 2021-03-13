const express = require('express');
const app = express();

app.use(express.json());


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

let AUTOINCREMENT = anime_names.length;

app.patch("/animenames/:id", (req, res) =>{
    anime_names = anime_names.map(animeName => {
        if(animeName.id === Number(req.params.id)){
            // Todo update it.

            return animeName;
        }
        return animeName;
    });
    res.send({});
});

app.post("/animenames", (req, res) => {
    const newAnimeName = req.body;
    newAnimeName.id = ++AUTOINCREMENT;
    anime_names.push(newAnimeName); 
    //Get the entity
    //server
    res.send({data : newAnimeName});
});

app.delete("/animenames/:id", (req, res) => {
    anime_names = anime_names.filter(animeName => animeName.id !== Number(req.params.id));
    res.send({});
});


app.listen(8080, (error) => {
    if(error) {
        console.log(error)
    } 
    console.log("Server running on port", 8080);
});