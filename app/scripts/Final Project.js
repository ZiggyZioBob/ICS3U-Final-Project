var timetypekeeper = 2;//This variable is used to track what type of time the clock is currently in, and its default is 24hour time

function AMPM() {//This function is triggered by a button of the same name
	document.getElementById("Thetoprightstuff").innerHTML = "<h3>AM/PM</h3>";//The function proceeds to change the type of time indicator to 12 hour time
	timetypekeeper = 1;//The relevent variable is changed accordingly
}

function t24H() {//This function is triggered by a button of the same name
	document.getElementById("Thetoprightstuff").innerHTML = "<h3>24H</h3>";//The function proceeds to change the type of time indicator to 24 hour time
	timetypekeeper = 2;//The relevent variable is changed accordingly
}

function ClockStart() {//This function is responsible for actually getting the appropriate time onto the clock display
	var currentime = new Date();//A variable is created that takes the current time
	var hours = currentime.getHours();//The current hour is extracted
	var minutes = currentime.getMinutes();//The current minute is extracted
	var seconds = currentime.getSeconds();//The current second is extracted
	var Timetypekeeper = "";//This variable is created
	if(timetypekeeper == 1){//The if function asks whether or not the clock is said to be in 12 hour time
		if(hours == 0){//If the previous function was true, it then asks whether or not is is midnight
			hours = 12;//If so, it changes it to 12
		}
		Timetypekeeper = "AM";//If the first if function was true, they change the empty variable to AM
		if(hours > 12){//We then see if it's the afternoon
			hours = hours - 12;//If so, we take 12 away from the time
			Timetypekeeper = "PM";//And then we say it is PM
		}
	}
	if(hours < 10){//We see if the current hour is less than 10 in numerical value
		hours = "0" + hours;//If so, we add a zero in front of it as to maintain two digits
	}
	if(minutes < 10){//We see if the current minute is less than 10 in numerical value
		minutes = "0" + minutes;//If so, we add a zero in front of it as to maintain two digits
	}
	if(seconds < 10){//We see if the current second is less than 10 in numerical value
		seconds = "0" + seconds;//If so, we add a zero in front of it as to maintain two digits
	}
	var timenow = hours + ":" + minutes + ":" + seconds + " " + Timetypekeeper ;//A new variable is identified as the combined time 
	document.getElementById("Here").innerHTML = timenow;//This combined time is then displayed on the page

    setTimeout(ClockStart, 100);//This recursive function makes this function repeat once every tenth of a second as to ensure the clock keeps on ticking
}


ClockStart();//This activates the above function when the page loads
