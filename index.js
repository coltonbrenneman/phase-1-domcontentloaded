// Your code goes here

// document.addEventListener("DOMContentLoaded",
// function(){
//     console.log("Them DOM has loaded");
// });

// console.log("THis console.log() fires when idnex.js loads before DOMContentLoaded is triggered");

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('text').innerHTML = "This is really cool!"
})