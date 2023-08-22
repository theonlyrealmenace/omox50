var svg = document.getElementById("my-svg");
var path;

svg.addEventListener("load", function() {
  var doc = svg.getSVGDocument();
  path = doc.querySelector("#path");
  
  path.addEventListener("click", function() {
    path.style.fill = "red";
  });
});


const star = document.querySelector('.fa-star');
star.style.fill = 'red'; // Change the color to red

