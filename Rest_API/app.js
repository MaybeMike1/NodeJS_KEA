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

app.post('/user', function (req, res) {
    const id = 1;
    console.log(id)
    console.log("Post has been called, firstName = " + req.body.firstName);
    res.send({body: req.body.id})
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

app.listen(expressPort, () => {
    console.log(`server is running on port: ${expressPort}`)
});

