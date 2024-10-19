//get a randoom number
// let random = Math.floor(Math.random() * 4) + 1
// console.log(random);

// var canvas = document.getElementById('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var c = canvas.getContext('2d');

//rectangle
// c.fillStyle = 'blue';//change color of rectangle
// c.fillRect(780, 500, 5, 5);

// function draw(){

// }

// draw();

// line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "red"; //change color of line
// c.stroke();

//Arc / Circle
// for (var i = 0; i < 3; i++){
//   c.beginPath();
// c.strokeStyle = "green";
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();
// }

//triangle
// c.fillStyle = 'gray';
// c.beginPath();
// c.moveTo(30, 30);
// c.lineTo(100, 75);
// c.lineTo(100, 25);
// c.fill();

// c.beginPath(); // smiley face
// c.strokeStyle = 'purple';
// c.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
// c.moveTo(110, 75);
//     c.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
//     c.moveTo(65, 65);
//     c.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
//     c.moveTo(95, 65);
//     c.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
//     c.stroke();
// c.stroke();

//choosing random item from array
// var array =["game", "name", "fire"];
// var down = document.getElementById('GFG_DOWN')

// function button() {
//   down.innerHTML = array[Math.floor(Math.random() * array.length)];
// }

// //stroke triangle
// c.beginPath();
//     c.moveTo(125, 125);
//     c.lineTo(125, 45);
//     c.lineTo(45, 125);
//     c.closePath();
//     c.stroke();

//Quadratic Bezier curves
// c.beginPath();
// c.moveTo(75, 25);
// c.quadraticCurveTo(25, 25, 25, 62.5);
// c.quadraticCurveTo(25, 100, 50, 100);
// c.quadraticCurveTo(50, 120, 30, 125);
// c.quadraticCurveTo(60, 120, 65, 100);
// c.quadraticCurveTo(125, 100, 125, 62.5);
// c.quadraticCurveTo(125, 25, 75, 25);
// c.stroke();

//   var rectangle = new Path2D();
//   rectangle.rect(10, 10, 50, 50);

//   var circle = new Path2D();
//   circle.arc(100, 35, 25, 0, 2 * Math.PI);

//   c.stroke(rectangle);
//   c.stroke(circle);

//   var conicGrad1 = c.createConicGradient(2, 62, 75);
// conicGrad1.addColorStop(0, '#A7D30C');
// conicGrad1.addColorStop(1, '#fff');

// c.fillStyle = conicGrad1;
// c.fillRect(12, 25, 100, 100);
