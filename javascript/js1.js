var colorCircles = [];
colorCircles[0] = document.getElementById("white");
colorCircles[1] = document.getElementById("red");
colorCircles[2] = document.getElementById("blue");
colorCircles[3] = document.getElementById("green");
colorCircles[4] = document.getElementById("yellow");
colorCircles[5] = document.getElementById("cyan");
colorCircles[6] = document.getElementById("magenta");
colorCircles[7] = document.getElementById("black");
colorCircles[8] = document.getElementById("someColoure");

var targetColor = "#FFF";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var list = document.getElementById("list");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function getRandomColor() {
	return "#" + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0");
}
function pickColor(e) {
	console.log(e.target.tagName);
	if (e.target.tagName == "LI") {
		if (e.target.id == "white") {
			targetColor = "#FFF"
		}
		else if (e.target.id == "red") {
			targetColor = "#F00"
		}
		else if (e.target.id == "blue") {
			targetColor = "#00F"
		}
		else if (e.target.id == "green") {
			targetColor = "#0F0"
		}
		else if (e.target.id == "yellow") {
			targetColor = "#FF0"
		}
		else if (e.target.id == "cyan") {
			targetColor = "#0FF"
		}
		else if (e.target.id == "magenta") {
			targetColor = "#F0F"
		}
		else if (e.target.id == "black") {
			targetColor = "#000"
		}
		else if (e.target.id == "someColoure") {
			targetColor = getRandomColor();
			colorCircles[8].style.background = targetColor;
		}
		for (var i = 0; i <= 8; i++) {
			colorCircles[i].style.height = "50px";
			colorCircles[i].style.width = "50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function drawOnCanvas(e) {
	if (e.buttons == 1) {
		canvasContext.fillStyle = targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, 20, 0, Math.PI * 2);
		canvasContext.fill();
	}
}


