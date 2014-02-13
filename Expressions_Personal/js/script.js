//James Stanbridge
//13 Feb 2014
//Expression (Personal)

//Calculating Gas Expenditures Per Year

//Note: I set this up as an experience for a user, but I can just as easily use it myself and the subject matter is relevant to my life.

alert("Hello! Let's estimate how much you're going to spend on gas for your vehicle this year. Click Ok to get started.");
//This is a simple alert letting the user know what we are going to calculate.
var vehDesc = prompt("Please enter the make and model of your vehicle.");
//Here we are asking for the vehicle description and storing it as the vehDesc variable to use in our final statement.

//Now we collect the actual information we need for the calculation.
var milesPerWeek = prompt("About how many miles do you travel in one week?");
//Declare the variable milesPerWeek, define it, and set up the prompt for the user.
var mpg = prompt("On average, how many miles does your vehicle get per gallon of gas?");
//Declare the variable mpg (miles per gallon), define it, and set up the prompt for the user.
var gasPrice = prompt("How much do you normally pay for one gallon of gas?");
//Declare the variable gasPrice, define it, and set up the prompt for the user.

var totalSpent = ((milesPerWeek / mpg) * gasPrice) * 52;
//Now we put all the variables together to calculate the amount the user will spend on gas per year and assign it to the variable totalSpent.
var normTotal = totalSpent.toFixed(2);

alert("In one year, you will spend approximately $" + normTotal + " fueling your " + vehDesc + ".");


console.log("In one year, the user will spend approximately $" + normTotal + " fueling your " + vehDesc + ".");
