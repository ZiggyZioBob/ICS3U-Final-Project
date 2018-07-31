var x = 10;
var timetypekeeper = 2;

function AMPM() {
	document.getElementById("Thetoprightstuff").innerHTML = "AM/PM";
	timetypekeeper = 1;
}

function t24H() {
	document.getElementById("Thetoprightstuff").innerHTML = "24H";
	timetypekeeper = 2;
}

function ClockStart() {
	debugger;
	var currentime = new Date();
	var hours = currentime.getHours();
	var minutes = currentime.getMinutes();
	var seconds = currentime.getSeconds();
	var Timetypekeeper = "";
	if(timetypekeeper == 1){
		if(hours == 0){
			hours = 12;
		}
		Timetypekeeper = "AM";
		if(hours > 12){
			hours = hours - 12;
			Timetypekeeper = "PM";
		}
	}
	if(hours < 10){
		hours = "0" + hours;
	}
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	var timenow = hours + ":" + minutes + ":" + seconds + " " + Timetypekeeper ;
	document.getElementById("Here").innerHTML = timenow;

    setTimeout(ClockStart, 100);
}


ClockStart();
