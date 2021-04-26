let today = new Date();
let currentYear = today.getFullYear();
console.log(currentYear);

document.getElementById('footer-copyright').innerText = "Copyright  © " + currentYear;