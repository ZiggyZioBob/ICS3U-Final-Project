var milliseconds = 0;//The variable used to record milliseconds
var tenmilliseconds = 0;//The variable used to record tens of milliseconds
var seconds = 0;//The variable used to record seconds
var tenseconds = 0;//The variable used to record tens of seconds
var minutes = 0;//The variable used to record minutes
var tenminutes = 0;//The variable used to record tens of minutes
var hours = 0;//The variable used to record hours
var Stopcounter = 0;//The variable used to keep track of whether or not the stop button has been pressed
var Runcounter = 0;//The variable used to keep track of whether or not the stopwatch is running
var ArrayLapDisplay = [];///The array used to create the list that is displayed as the lap values
var Lapcounter = 0;//The variable used to keep track of whether or not there has been laps that have been recorded in the given user session
var LapnumberCounter = 0;//The variable used to keep track of the number of laps that have been recorded
var Lapdisplayvalue = [];//The array that is created from the first array used to select the specific laps a user would want to find and display them
var ThisCounter = 0;//The variable used to keep track of which lap the loop is currently disecting to insert into the above array
var Counternow = "0:00:00:00";//A variable used to reset the stopwatch back to 0
var Resetcounter = 0;//The variable used to determine whether or not the stopwatch has been stopped and whether or not we can reset it
var y = 29;//The standard multiplication factor of the number of elements in a standard lap that is subject to change
var x = 10;//This variable increments the above variable when the number of digits change in the lap numbers as to prevent any bugs from happening
var z = 0;//A subtraction variable that deals with the difference created by the multiplication that is also subject to change depending on the number of digits
var q = 1;//A variable counter used to ensure a function is preformed only once

function Start() {//The function that is triggered when the start button is pressed
	Runcounter = 1;//This indicates that the stopwatch is running
	milliseconds = milliseconds + 1;//millisecond increment
	if(milliseconds == 10){//A test to see if 10 milliseconds is reached
		tenmilliseconds = tenmilliseconds + 1;//If so, the tenmillisecond variable increases by one
		milliseconds = 0;//And the millisecond variable is set back to zero
		if(tenmilliseconds == 10){//The above is repeated for the rest of the functions
			seconds = seconds + 1;
			tenmilliseconds = 0;
			if(seconds == 10){//To seconds
				tenseconds = tenseconds + 1;
				seconds = 0;
				if(tenseconds == 6){//To tens of seconds
					minutes = minutes + 1;
					tenseconds = 0;
					if(minutes == 10){//To minutes
						tenminutes = tenminutes + 1;
						minutes = 0;
						if(tenminutes == 6){//To tens of minutes
							hours = hours + 1;//And finally to hours
							tenminutes = 0;
						}
					}
				}
			}
		}
	}

	var Counternow = hours + ":" + tenminutes + "" + minutes + ":" + tenseconds + "" + seconds + ":" + tenmilliseconds + "" + milliseconds;//After completing the above, the new stopwatch time is compiled into a new variable
	document.getElementById("Haha").innerHTML = Counternow;//That new variable is then displayed on the interface

	if(Stopcounter == 1){//We check if the stop button has been pressed
		Stopcounter = 0;//If so, we reset the variable 
		Runcounter = 0;//And also reset the run variable as the stopwatch will no longer be running
		return;//And we exit the function
	}
	setTimeout(Start, 10);//If the above if function is not triggered, this recursive function makes this function happen once every millesecond
}

function Stop() {//The stop function is activated when the user presses the stop button
	Stopcounter = 1;//The stopcounter is incremented, therefore stoping the stopwatch
	Resetcounter = 1;//The resetcounter is set to one to allow for the stopwatch to be reset if the user pleases
}

function Reset() {//This reset function is activated when the user presses the reset button
	if(Resetcounter == 1){//If first asks whether or not the stopwatch is stopped
		milliseconds = 0;//It sets the milliseconds to zero
		tenmilliseconds = 0;//The tens of milliseconds to zero
		seconds = 0;//And so on...
		tenseconds = 0;
		minutes = 0;
		tenminutes = 0;
		hours = 0;
		Resetcounter = 0;//The reset counter is set back to zero so the user can record again with bugs
		Lapcounter = 0;//The lap counter is reset
		LapnumberCounter = 0;//The lap number counter is reset
		Counternow = "0:00:00:00";//A variable is restated
		document.getElementById("Haha").innerHTML = Counternow;//The interface is reset to all zeroes
		ArrayLapDisplay = [];//The lap array is set back to zero
		document.getElementById("Lapdisplay").innerHTML = ArrayLapDisplay;//All the laps are wiped
	}
}

function Lap() {//The lap function that happends when the user presses the lap button
	if(Runcounter == 1){//It asks whether or not the stopwatch is actually running
		LapnumberCounter = LapnumberCounter + 1;//It increments the number of laps
		ArrayLapDisplay = ArrayLapDisplay + "<b>Lap " + LapnumberCounter + ": </b>" + document.getElementById("Haha").innerHTML;//The lap is recorded into the array 
		ArrayLapDisplay = ArrayLapDisplay + "</br>";//The next lap is set to be on its own lane
		Lapcounter = 1;//The indication that there exists laps
		document.getElementById("Lapdisplay").innerHTML = ArrayLapDisplay;//The array is updated
	}
}

function FindLap() {//This is triggered when the user inputs a range of values of laps they wish to search for on the page and presses the button that searches for their indicated lap range
	if(Lapcounter == 1){//It asks whether or not laps have actually been recorded
		var Lapfindvalue1 = parseInt(document.getElementById("Lapbox1").value);//It takes the value from the first input box, being the start of the range
		var Lapfindvalue2 = parseInt(document.getElementById("Lapbox2").value);//It then takes the value from the second input box, the end of the range
		ThisCounter = Lapfindvalue1;//The counter is set to the first value as to start there
		while(ThisCounter >= x){//We ask if the first value is a two or greater digit number
			y = y + 1;//If so the multiplication value is incremented to correspond accordingly
			x = x * 10;//This is incremented to see if there exists three, four, and higher digits of laps, however unlikely that may be
		}
		if(Lapfindvalue1 > 9){//If there is more than two digits, we have a difference value set at 9
			z = 9;//It is set
		}
		Lapfindvalue1 = (Lapfindvalue1 - 1) * y - z;//We have the starting point calculated based on situation
		do {
			while(ThisCounter >= x){//We do the same check every time as above to check if the lap number has increased in digit number
				y = y + 1;//If so, the same as above happens
				x = x * 10;
			}
			if(q == 1){//This is another counter
				if(Lapfindvalue1 > 9){//We ask if the lap number has become greater than 9, if so we we do the following once
					Lapfinvalue1 = Lapfindvalue1 - 4;//We subtract a difference of 4 away from the string to prevent bugs from inter digital user input
					q = 0;//This counter is set to zero as this can only happpen once in the entire loop
				}
			}
			for(var m = 0; m < y; m++){//This is used to add the values to the array
				Lapdisplayvalue = Lapdisplayvalue + ArrayLapDisplay[Lapfindvalue1 + m];//We add the indicated lap set to another array, and move on once the appropraite number of digits have been submitted
			}
			Lapfindvalue1 = Lapfindvalue1 + y;//We add the increment for the following lap value, assuming there is one
			ThisCounter = ThisCounter + 1;//We increase the counter that counts from the floor of the user given range to the ceiling
		} while (ThisCounter <= Lapfindvalue2);//Once it has reached the ceiling, the loop is broken
		document.getElementById("Lapdisplay").innerHTML = Lapdisplayvalue;//We then display the array in the place of the previous full lap array
		ThisCounter = 0;//We reset the counter
		Lapdisplayvalue = [];//We reset the temporary array
		y = 29;//We reset the multiplication factor
		x = 10;//We reset the difference
		q = 1;//We reset the once time use counter
		document.getElementById("Lapbox1").value = "";//We clear the first user input box
		document.getElementById("Lapbox2").value = "";//We clear the second user input box
	}
}

function Return() {//Another button underneath the above returns the user to the original array
	document.getElementById("Lapdisplay").innerHTML = ArrayLapDisplay;//We simply call back the first array created from the lap function
}
