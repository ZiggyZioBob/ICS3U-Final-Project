var milliseconds = 0;
var tenmilliseconds = 0;
var seconds = 0;
var tenseconds = 0;
var minutes = 0;
var tenminutes = 0;
var hours = 0;
var Stopcounter = 0;
var Runcounter = 0;
var Counternow = "0:00:00:00";

function Start() {
	Runcounter = 1;
	milliseconds = milliseconds + 1;
	if(milliseconds == 10){
		tenmilliseconds = tenmilliseconds + 1;
		milliseconds = 0;
		if(tenmilliseconds == 10){
			seconds = seconds + 1;
			tenmilliseconds = 0;
			if(seconds == 10){
				tenseconds = tenseconds + 1;
				seconds = 0;
				if(tenseconds == 6){
					minutes = minutes + 1;
					tenseconds = 0;
					if(minutes == 10){
						tenminutes = tenminutes + 1;
						minutes = 0;
						if(tenminutes == 6){
							hours = hours + 1;
							tenminutes = 0;
						}
					}
				}
			}
		}
	}

	var Counternow = hours + ":" + tenminutes + "" + minutes + ":" + tenseconds + "" + seconds + ":" + tenmilliseconds + "" + milliseconds;
	document.getElementById("Haha").innerHTML = Counternow;

	if(Stopcounter == 1){
		Stopcounter = 0;
		Runcounter = 0;
		return;
	}
	setTimeout(Start, 10);
}

function Stop() {
	Stopcounter = 1;
	Resetcounter = 1;

}

function Reset() {
	if(Resetcounter == 1){
		milliseconds = 0;
		tenmilliseconds = 0;
		seconds = 0;
		tenseconds = 0;
		minutes = 0;
		tenminutes = 0;
		hours = 0;
		Resetcounter = 0;
		Counternow = "0:00:00:00";
		document.getElementById("Haha").innerHTML = Counternow;
	}
}

function Lap() {
	if(Runcounter == 1){
		debugger;
		document.getElementById("Lapdisplay").innerHTML = document.getElementById("Haha").innerHTML + "<br/>";
	}
}