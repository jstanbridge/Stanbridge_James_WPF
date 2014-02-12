// James Stanbridge
// 12 Feb 2014
// Expression Worksheet

//DOG YEARS
//Note: I watched the video on prompts and alerts and wanted to try them for myself. I hope that is okay as the script still accomplishes the tasks of the assignment.
var actualYears = prompt("Please enter your dog's age in actual years to find out how old he/she is in dog years.");
//Here we are prompting the user for their dog's actual age and storing it as the variable "actualYears".
var dogYears = actualYears * 7;
//Here we are calculating the dog's age in dog years by multiplying the variable "actualYears" by 7 and storing it as the variable "dogYears".

console.log("Sparky is " + actualYears + " human years old which is " + dogYears + " years old in dog years.");
//This is a console command to print the result of the above calculation to the console using a concatenated.

alert("Your dog is " + dogYears + " years old in dog years!");
//Here we are also sending the result of the calculation to the user using a concatenated string.



//SLICE OF PIE PT1
var numPizzas = 5;
//Here we are declaring the variable numPizzas to represent the number of pizzas the students ordered and defining it as 5.
var numStudents = 20;
//Here we are declaring the variable numStudents to represent the number of students at the party and defining it as 20.
var numSlices = 8;
//Here we are declaring the variable numSlices to represent the number of slices each pizza has and defining it as 8.

var result = numPizzas * numSlices / numStudents;
//Here we are declaring the variable result and defining it by calculating slices per person using the appropriate equation.

console.log(numStudents + " students at a party ordered " + numPizzas + " pizzas. Each pizza had " + numSlices + " slices so each student ate " + result + " slices.");
//This is the console command using variables in a concatenated string to print the results information to the console.



//SLICE OF PIE PT2
var numPizzas = 9;
//Here we are declaring the variable numPizzas to represent the number of pizzas the students ordered and defining it as 9.
var numStudents = 20;
//Here we are declaring the variable numStudents to represent the number of students at the party and defining it as 20.
var numSlices = 8;
//Here we are declaring the variable numSlices to represent the number of slices each pizza has and defining it as 8.

var sparkysSlices = numPizzas * numSlices % numStudents;
//Here we are switched the results variable to sparkysSlices and defined it by calculating slices per person using the same equation  as before,
//but this time we used the modulo operator instead of division in order to get the remainder after the students all got an equal share of the slices.

var stuSlices = (numPizzas * numSlices - sparkysSlices) / numStudents;
//Here we declared the variable stuSlices in order to keep the number of student slices listed in our console.log accurate using a new equation that divides
//evenly after subtracting the remainder we got using the modulo operator in sparkysSlices.

var result = sparkysSlices;
//We swapped the result variable to the amount of slices Sparky gets (sparkysSlices) since that is what we are trying to calculate.

console.log(numStudents + " students at a party ordered " + numPizzas + " pizzas. Each pizza had " + numSlices + " slices so each student ate " + stuSlices + " slices and Sparky got " + sparkysSlices + " slices of pizza.");
//Same as before, we just updated the string to include information about how many slices of pizza Sparky gets to eat.



//AVERAGE SHOPPING BILL
var groceryTotals=[10,20,30,40,50];
//Here we are declaring the variable groceryTotals and defining it as an array of five numbers.
var grandTotal = groceryTotals[0]  + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];
//Here we are declaring the variable grandTotal and defining it as the sum of all the values of the groceryTotals array to give us the total amount spent on groceries over five weeks.
var average = grandTotal / 5;
//Here we are declaring the variable average and defining it as the grandTotal divided by the number of weeks, in this case 5.
var result = average;
//Here we simply declared a results variable and set it as equal to the average variable. Not necessary for this example, but good for future use.
console.log("You have spent a total of $" + grandTotal + " on groceries over 5 weeks. That is an average of $" + result + " per week.");
//Lastly, we set the console log to print a concatenated string containing all the relevant information.



//DISCOUNTS
//Note: The assignment did not specify whether or not discounts should be applied before or after tax. I assumed before tax in this case.
var price = 50;
//Here we are declaring a variable to represent the pre-tax/pre-discount price of the item and defining it.
var discPercent = 15;
//Here we are declaring the variable for the discount percent and defining it.
var itemDesc = "PC game";
//Here we are simply declaring a variable to describe the item. I have used a string for the definition here.
var taxPercent = 8;
//Here we are declaring the variable for the tax percent and defining it.

var salesTax = taxPercent / 100;
//Here we are declaring a new variable that will calculate the decimal value of the tax percent for use in later equations.
var discount = discPercent / 100;
//Here we are declaring a new variable that will calculate the decimal value of the discount percent for use in later equations.

var discPriceNoTax = price - price * discount;
//Here we are calculating the discounted price before sales tax and setting it to the variable discPriceNoTax.
var discPriceTax = discPriceNoTax + discPriceNoTax * salesTax;
//Here we use the discPriceNoTax we defined earlier to calculate the discount price once sales tax has been applied.
console.log("Your " + itemDesc + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + discPriceNoTax + " without tax, and $" + discPriceTax + " with tax.");
//This is the console command to print all pertinent information in the form of a concatenated string.