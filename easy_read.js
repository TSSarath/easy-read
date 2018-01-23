/**
* Easy_Read makes it easy to read web pages for a longer period by making
* them appear dark.
* @Author Rudhin
*/

// if filter css exists
//if(document.documentElement.style.filter) {
	if(document.documentElement.style.filter == "invert(100%)"){
		document.documentElement.style.filter = "invert(0%)";
		console.log("Reverted ;)");
	} else if(document.documentElement.style.filter == "invert(0%)"){
		document.documentElement.style.backgroundColor='#000000';
		document.documentElement.style.filter = "invert(100%)";
		document.documentElement.style.backgroundColor='#ffffff';
		console.log("Inverted :)");
	} else{
		document.documentElement.style.backgroundColor='#000000';
		document.documentElement.style.filter = "invert(100%)";
		document.documentElement.style.backgroundColor='#ffffff';
		console.log("Inverted for the first time :D");
	}
//} else {
//	console.log("No filter found :(");
//}

