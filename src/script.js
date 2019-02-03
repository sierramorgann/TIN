
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
    		setTimeout(function() { hideOut(); }, 550);
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

var input = document.getElementById("input");
var output = document.querySelector(".output");
var button = document.querySelector("button");
var one =  /^.*\b(credits|miyazaki|kiki|motorcycle|dream witch|witch|dreamsequence004)\b.*$/;
var two = /^.*\b(red hoods|dreamsequence003|dream demon|demon|new music|music)\b.*$/;
var three = /^.*\b(callhimtin|tin|rgb|tender|99centdreams|dream|dreams|dreaming|customer name)\b.*$/;
var four = /^.*\b(dreamsequence001)\b.*$/;
var five = /^.*\b(dreamsequence002)\b.*$/;
var six = /^.*\b(hello|wtf|ok|hi|what|help|go|yes|no)\b.*$/;

var containElement = document.getElementById('noOne');
var bottomTxt = document.getElementById('btmTxt');
var media = document.getElementsByClassName("media");

function showOut(x) { 
	// containElement.style.background = 'none';
	bottomTxt.style.display = 'none';
	button.style.display = 'none';
	input.style.display = 'none';
    x.style.display = "block";
}

function hideOut() {
	// containElement.style.background = '';
	bottomTxt.style.display = '';
	button.style.display = '';
	input.style.display = '';

	for (var i = 0, max = media.length; i < max; i++) {
    	media[i].style.display = "none";
	}
	media.style.display = "none";
}

document.getElementById("mod").addEventListener("click", function(){
	hideOut();
})

document.getElementById("gogo").addEventListener("click", function(){
  gogo();
});

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
		// var m = document.getElementById("sndClip1");
		// showOut(m);
		window.open('https://soundcloud.com/callhimtin/untitled-6c/s-QnfXI', '_blank');

	} 
	else if (resultTwo == true) {
		// var y = document.getElementById("sndClip2");
		// showOut(y);
		window.open('https://soundcloud.com/callhimtin/monument-2c', '_blank');
	} 
	else if (resultThree == true) {
		// var z = document.getElementById("btsPhotos");
		// showOut(z);
		window.open('http://www.instagram.com/99centdreaming', '_blank');
	} 
	else if (resultFour == true) {
		// var q = document.getElementById("rgb");
		// showOut(q);
		window.open('https://www.youtube.com/watch?v=MLmfywGBl74', '_blank');
	} 
	else if (resultFive == true) {
		// var w = document.getElementById("tender");
		// showOut(w);
		window.open('https://www.youtube.com/watch?v=HJbamdkmcCU&feature=youtu.be', '_blank');
	} 
	else if (resultSix == true) {
		var f = document.getElementById("fullPage");
		showOut(f);
		changecolors();
	}  else {
		changecolors();
	}
	
	
}








