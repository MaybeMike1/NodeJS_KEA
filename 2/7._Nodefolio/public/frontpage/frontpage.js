/*  const $ = require("jquery")(dom.window);

console.log("Calleed") */
$("#outputButton").on(function(){
    let output = "";
    console.log("hej")
    if(document.getElementById("selected").value === "skills") {
        $("#output").text("<h1>hej</h1>");
    }
}) 

console.log("Called")
$.get();