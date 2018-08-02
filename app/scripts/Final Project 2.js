var milliseconds = 0;
var tenmilliseconds = 0;
var seconds = 0;
var tenseconds = 0;
var minutes = 0;
var tenminutes = 0;
var hours = 0;
var Stopcounter = 0;
var Runcounter = 0;
var ArrayLapDisplay = [];
var Lapcounter = 0;
var LapnumberCounter = 0;
var Lapdisplayvalue = [];
var ThisCounter = 0;
var Counternow = "0:00:00:00";
var y = 29;
var x = 10;
var z = 0;
var q = 1;

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
		Lapcounter = 0;
		LapnumberCounter = 0;
		Counternow = "0:00:00:00";
		document.getElementById("Haha").innerHTML = Counternow;
		ArrayLapDisplay = [];
		document.getElementById("Lapdisplay").innerHTML = ArrayLapDisplay;
	}
}

function Lap() {
	if(Runcounter == 1){
		LapnumberCounter = LapnumberCounter + 1;
		ArrayLapDisplay = ArrayLapDisplay + "<b>Lap " + LapnumberCounter + ": </b>" + document.getElementById("Haha").innerHTML;
		ArrayLapDisplay = ArrayLapDisplay + "</br>";
		Lapcounter = 1;
		document.getElementById("Lapdisplay").innerHTML = ArrayLapDisplay;
	}
}

function FindLap() {
	debugger;
	if(Lapcounter == 1){
		var Lapfindvalue1 = parseInt(document.getElementById("Lapbox1").value);
		var Lapfindvalue2 = parseInt(document.getElementById("Lapbox2").value);
		ThisCounter = Lapfindvalue1;
		while(ThisCounter >= x){
			y = y + 1;
			x = x * 10;
		}
		if(Lapfindvalue1 > 9){
			z = 9;
		}
		Lapfindvalue1 = (Lapfindvalue1 - 1) * y - z;
		do {
			while(ThisCounter >= x){
				y = y + 1;
				x = x * 10;
			}
			if(q == 1){
				if(Lapfindvalue1 > 9){
					Lapfinvalue1 = Lapfindvalue1 - 4;
					q = 0;
				}
			}
			for(var m = 0; m < y; m++){
				Lapdisplayvalue = Lapdisplayvalue + ArrayLapDisplay[Lapfindvalue1 + m];
			}
			Lapfindvalue1 = Lapfindvalue1 + y;
			ThisCounter = ThisCounter + 1;
		} while (ThisCounter <= Lapfindvalue2);
		document.getElementById("Lapdisplay").innerHTML = Lapdisplayvalue;
		ThisCounter = 0;
		Lapdisplayvalue = [];
		y = 29;
		x = 10;
		q = 1;
		document.getElementById("Lapbox1").value = "";
		document.getElementById("Lapbox2").value = "";
	}
}

function Return() {
	document.getElementById("Lapdisplay").innerHTML = ArrayLapDisplay;
}
