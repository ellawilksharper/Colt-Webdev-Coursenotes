
var button = document.querySelector("button");
// var purple = false;

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});

//alernative but longer way of changing the colour

// button.addEventListener("click", function() {
// 	if (purple){
// 		document.body.style.background = "white";	
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	purple = !purple;
// });


//changing h1 colour with setInterval

var h1 = document.querySelector("h1");
var white = false;

setInterval(function(){
	if (white) {
		h1.style.background = "white"	
	} else {
		h1.style.background = "yellow"
	}
	white = !white;
}, 1000);


