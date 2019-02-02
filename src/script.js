
// show the error 

function changecolors() {
    x = 1;
    var timesRun = 0;
    var interval = setInterval(function(){
    	timesRun += 1;
    	if(timesRun === 10){
	    	clearInterval(interval);
	    	document.body.style.background = "";
    	} else {
    		change();
    	}
	}, 50); 
}

function change() {
    if (x === 1) {
        color = "black";
        x = 2;
    } else {
        color = "white";
        x = 1;
    }

    document.body.style.background = color;
}


// Inputs to Outputs

var output = document.querySelector(".output");
var button = document.querySelector("button");
var one =  /^.*\b(credits|miyazaki|kiki|motorcycle|dream witch|witch|dreamsequence004)\b.*$/;
var two = /^.*\b(red hoods|dreamsequence003|dream demon|demon|new music|music)\b.*$/;
var three = /^.*\b(callhimtin|tin|rgb|tender|99centdreams|dream|dreams|dreaming|customer name)\b.*$/;
var four = /^.*\b(dreamsequence001)\b.*$/;
var five = /^.*\b(dreamsequence002)\b.*$/;
var six = /^.*\b(hello|wtf|ok|hi|what|help|go|yes|no)\b.*$/;

function hideShow(x) {
	if (x.style.display === "none") {
    	x.style.display = "block";
  	} else {
    	x.style.display = "none";
  	}
}

function gogo() {
	var input = document.getElementById("input").value;
	var lower = input.toLowerCase();
	
	var resultOne = one.test(lower);
	var resultTwo = two.test(lower);
	var resultThree = three.test(lower);
	var resultFour = four.test(lower);
	var resultFive = five.test(lower);
	var resultSix = six.test(lower);

	// if result is correct take to next page
	if (resultOne == true) {
		var m = document.getElementById("#sndClip1");
		console.log(m);
		hideShow(m);
		location.href = "vid.html";
	}
	if (resultTwo == true) {
		location.href = "vid.html";
		var y = document.getElementById("sndClip2");
		hideShow(y);
	}
	if (resultThree == true) {
		location.href = "vid.html";
		var z = document.getElementById("btsPhotos");
		hideShow(z);
	}
	if (resultFour == true) {
		location.href = "vid.html";
		var q = document.getElementById("rgb");
		hideShow(q);
	}
	if (resultFive == true) {
		location.href = "vid.html";
		var w = document.getElementById("tender");
		hideShow(w);
	}
	if (resultSix == true) {
		location.href = "vid.html";
		var f = document.getElementById("fullPage");
		hideShow(f);
	}
	// display error message if no match 
	else if (result == false) {
		changecolors();
	}
	
}








