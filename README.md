# ICS3U-Final-Project (2018)

This project is to be marked and this is where the final code will be stored

# What the project does

This project creates two linked applications, being a clock and a stopwatch. 
The clock is able to tell you the time in the current time zone and the stopwatch
is able to record time, lap time and search for specific laps at your convenience.

# How the project works

HTML is used to create the basic frames and looks of the website, buttons, textboxes and tables with unique onclick and id
functions assigned to them. CSS utilizes those id tags to give each part of the applications a color, favourable margins, 
appropriate sizes, etc. For the clock, javascript functions are created to aquire the time of the current time zone, and displays
it on the table, with the function running once every tenth of a second. Two other functions are created to flip the type of time
the clock operates in, whether that be the full 24 hour time or 12 hour AM/PM time. Buttons also allow for the user to access the
stopwatch with a single click. The stopwatch has a function that runs once every milisecond to increment the clock should the start 
button be pressed, and that converts the millisecond values to second values, second values to minute values and so on when
appropriate. The stop function stops the stopwatch and the reset function reverts all the values back to zero. The lap function creates
laps underneath the application of the current stopwatch time when created, and two input boxes allow for the user to search for specific 
times of specific laps with the click of a button, and revert back to the full list with the click of another button. The stopwatch page also
has buttons to allow the user to access the clock application at any given time. There are many variables that are created to account for
mathematical differences and to act as minor bug preventers.

# How to compile the project

The project may be compiled either by running it in a browser or to open up the command prompt, find the folder where the code is stored 
and run gulp serve should npm be present. 

# How to test the project

You may install debugger applications in the code and compile the program, and then inspect the page to figure out the bugs or whether or
not a certain part of the project is bugged.

# Contributors

[Xiao Liu](mailto:liuliuliucnca@gmail.com)