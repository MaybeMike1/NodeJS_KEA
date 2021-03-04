const express = require("express");
const app = express();
const expressPort = 8080;

// A way to parse json without getting undefined json.
app.use(express.json());

//app.use("/static", express.static('./static/'));

app.get("/", (req,res) =>{
    res.sendFile( __dirname + "/index.html" );
});

//Get a list of users finished.
app.get("/users", (req, res) => {
    res.send(users);
});

app.post('/user',  (req, res) => {
    const id = 1;
    console.log(id);
    users.push(req.body);
    console.log("Post has been called, firstName = " + users[4][firstName]);
    res.send({user: req.body})
  });

app.put('/user/:id', (req,res) => {
    const id = req.params.id - 1;
    users[id] = req.body;
    console.log(id);
    res.send({user : req.body});
}); 

// Get by id has been finished.
app.get("/user/:id", (req, res) => {
    const userId = req.params.id - 1;
    console.log(userId)
    res.send({user: users[userId]}); 
});

let users = [
    {"id" : 1, "firstName" : "Michael", "lastName": "Berko"},
    {"id" : 2, "firstName" : "Ammad", "lastName" : "Azhar"},
    {"id" : 3, "firstName" : "Rasmus", "lastName" : "Jensen"},
    {"id" : 4, "firstName" : "Julius", "lastName" : "Christoffersen"}
]

//Delete by id finished
app.delete("/user/delete/:id", (req, res) => {
    const userId = req.params.id - 1;
    console.log(users[userId], " has been deleted")
    users.splice(userId, 1);
    console.log(users)
    res.send({ users: users});
});

app.listen(expressPort, (error) => {
    if(error) {
        
    } 
    console.log(`server is running on port: ${expressPort}`)
});

