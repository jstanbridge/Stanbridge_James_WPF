//James Stanbridge
//13 Feb 2014
//Expressions (Personal)

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
//I wanted to try getting the total to round to two decimal places. I'm not sure that this is the right or best solution, but it seems to
//work for this particular example. If it is wrong it can be removed and normTotal in the alert/console.log below can be replaced with totalSpent.

alert("In one year, you will spend approximately $" + normTotal + " fueling your " + vehDesc + ".");
//The final alert that provides the user with all the relevant information.

console.log("In one year, the user will spend approximately $" + normTotal + " fueling your " + vehDesc + ".");
//Printing the result to the console for rubric purposes.