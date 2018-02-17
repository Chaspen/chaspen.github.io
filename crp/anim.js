// Set up!
var a_canvas = document.getElementById("canvas");
var context = a_canvas.getContext("2d");

var creepyAudio = new Audio("mus.ogg");
creepyAudio.play();

function playIMG (src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = auto;
  img.height = auto;
  img.alt = alt;

  document.body.appendChild(img);
}
