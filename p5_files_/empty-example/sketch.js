// var img;
// function preload() {
//   img = loadImage('cat.jpg');
// }

// function setup() {
//   createCanvas(400, 240);
//   image(img, 0, 0);
// }

function setup() {
  createCanvas(700, 580);
  strokeWeight(6);
  line(515,115,600,115); //top horizontal
  line(515,115,515,130); //top vertical tip
  line(600, 115, 600, 470); //main pole vertical
  line(415, 470, 685, 470); //support bottom post
  line(600, 400, 640, 470) //support beam 1
  line(600, 400, 560, 470) //support beam 2

}

function draw() {
var slider = createSlider(0, 255, 127);

}



//ideas: click and drag sound app
//p5 sound library link
//<script language="javascript" type="text/javascript" src="path/to/p5.sound.js"></script>
// p5.js-sound/lib/p5.sound.js
