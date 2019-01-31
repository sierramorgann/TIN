
// PopUp Error Messaging Handler

var box = document.querySelector(".popUp");

document.addEventListener("click", function(event) {

	if (event.target.closest(".popUp")) return;

	box.classList.add("hidden");
});


// Inputs to Outputs

var output = document.querySelector(".output");
var input = document.querySelector("input").value;
var button = document.querySelector("button");

var regex = /[A-Z]/g;
// var found = input.match(regex);

button.onClick = gogo();

function gogo() { 
	if (input.match(regex)) {
		location.href = "vid.html";
		console.log("yas");
	}
	else {
		box.classList.add("display");
		console.log("nope");
	}
	
}





