const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get("/proxy", async (req,res)=>{
    const page = await fetch('https://google.com').then(res => res.text());
    res.send(page);
});



app.listen(8080);