var numSquares = 6;
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){

	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	this.textContent = "New Colors"

	message.textContent = "";
	//generate random color
	colors = generateRandomColor(numSquares);
	//pick random color
	pickedColor = pickColor();
	//change display for generated color
	colorDisplay.textContent = pickedColor;
	//change colors of the squares
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedColor){
			message.textContent = "Correct";
			resetButton.textContent = "Play Again?"
			changeColors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;

		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again"
		}
	})
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
 	var arr =[];
 	// put random num in array
 	for(var i=0;i<num;i++){
 		arr.push(randomColor());
 	}
 	//return array
 	return arr;
}

function randomColor() {
	// red
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}