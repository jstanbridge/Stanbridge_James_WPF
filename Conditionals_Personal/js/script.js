//James Stanbridge
//20 Feb 2014
//Conditionals Worksheet

//LAST CHANCE FOR GAS!

//Below we are declaring and defining all the necessary variables for our equation.
var mpg = prompt("How many miles per gallon does your car get on average?");
//Miles per gallon that the vehicle gets on average.
var capacity = prompt("How much gas (in gallons) does your car hold at max capacity?");
//Maximum fuel capacity of the vehicle.
var gauge = prompt("According to your fuel gauge, how much gas is left in your car (please give this as a percentage value.");
//The percentage of gas left in the vehicle according to the fuel gauge.
var perLeft = gauge/100;
//This turns the percentage from gauge into a decimal we can use in later calculations. IE 66 = .66, etc.
var gasLeft = capacity * perLeft;
//This determines how many gallons of gas are left based on max capacity versus percentage left.
var currentMPG = gasLeft * mpg;
//This determines how many miles the vehicle can travel based on it's remaining fuel and it's mpg.
var milesLeft = prompt("How many miles do you have left to travel?");
//This variable contains the number of miles the vehicle has to travel to reach it's destination. I made it a prompt instead of just setting it to 200 to provide future flexibility.

if (currentMPG >= milesLeft){
//This if statement checks to see if the number of miles the vehicle can travel with it's remaining fuel is great that the number of miles remaining to reach the vehicle's destination.
    alert("Yes, you can make it without stopping for gas!");
    console.log("Yes, you can make it without stopping for gas!");
    //If the above if statement is true, then the above result (the alert/console command) will be printed, informing the use that they can make the trip without stopping for gas.
}else alert("You only have " + gasLeft + " gallons of gas left in your tank, better get gas now while you can!");
console.log("You only have " + gasLeft + " gallons of gas left in your tank, better get gas now while you can!");
//If the above if statement is false, then the above result (the alert/console command) will be printed, informing the use that they need to get gas before making the trip.

//The console commands below are just for checking to make sure the calculations are being done correctly.
console.log(mpg);
console.log(capacity);
console.log(gasLeft);
console.log(currentMPG);



//CHECK THE LOGIN

var enteredName = prompt("Please enter your username. (For this example, the username is Riley.)");
//Here we are assigning a variable to the username entered by the user.
var enteredPass = prompt("Please enter your password. (For this example, the password is WebDesign");
//Here we are assigning a variable to the password entered by the user.
var actualName = "Riley";
//This variable contains the actual username as recorded by the system.
var actualPass = "WebDesign";
//This variable contains the actual password as recorded by the system.

if (enteredName === actualName && enteredPass === actualPass){
    //This condition ensures that both the entered username and password are correct.
    alert("Welcome, " + actualName + "!");
    console.log("Welcome, " + actualName + "!");
    //If the conditions above are met, then the above alert/console command will print welcoming the user.
}else if (enteredName != actualName){
    //If the initial conditions are not met, this checks to see if the username was correct.
    alert("User not found. Try again.");
    console.log("User not found. Try again.");
    //If the username was incorrect, then the above alert/console command will print stating the user was not found.
}else if (enteredName === actualName && enteredPass != actualPass){
    //If the initial conditions are not met and the username WAS correct, this checks to see if the password was correct.
    alert("Password does not match our records.");
    console.log("Password does not match our records.");
    //If the password was incorrect, then the above alert/console command will print stating the password was incorrect.
}


//MOVIE TICKET PRICE

var age = prompt("How old are you?");
//This prompt asks the user for their age and assigns it to the variable age.
var movieTime = prompt("What time does your movie start? (Please use 24 hour times, such as 1300)");
//This prompt asks the user for the start time of their movie and assigns it to the variable movieTime.
var ticketPrice = 12;
//Here we declare the variable ticketPrice and define it as the default ticket price of $12.

if ((age >= 55 || age <= 10) || (movieTime >= 1500 && movieTime <= 1700)){
    //This is statement checks to see if the user's age OR the movie time falls within the necessary range to receive a discounted ticket.
    ticketPrice = 7;
    //If the above condition is true, then we define the variable ticketPrice as 7.
}

alert("The ticket price is $" + ticketPrice + ".");
console.log("The ticket price is $" + ticketPrice + ".");
//The above alert/console commands are printed to let the user know how much their ticket costs.