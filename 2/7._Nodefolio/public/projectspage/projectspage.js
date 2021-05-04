/* let today = new Date();
let currentYear = today.getFullYear();
console.log(currentYear);

document.getElementById('footer-copyright').innerText = "Copyright  © " + currentYear;
 */
console.log("File from projects folder")

fetch('http://localhost:8080/api/projects')
  .then(response => response.json())
  .then(json => console.log(json));

let xhr = new XMLHttpRequest();

xhr.open('get', "http://localhost:8080/api/projects" )
xhr.onload = function() {
  console.log(xhr.response);
}