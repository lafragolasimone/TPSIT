const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "white";
ctx.beginPath();

ctx.moveTo(250, 50);
ctx.lineTo(300, 200);
ctx.lineTo(450, 200);
ctx.lineTo(325, 300);
ctx.lineTo(375, 450);
ctx.lineTo(250, 375);
ctx.lineTo(125, 450);
ctx.lineTo(175, 300);
ctx.lineTo(50, 200);
ctx.lineTo(200, 200);

ctx.closePath();

ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fill();