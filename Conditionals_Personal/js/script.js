//James Stanbridge
//20 Feb 2014
//Conditionals Personal

//This project will help determine what body area to workout when given the day of the week.

alert("Hi, we're going to help you determine what body area you should workout this week");

var run = prompt("Have you run this week?");
var dayOfWeek = prompt("What day of the week is it?");

if (run === "No"){
    exercise = "cardio";
}else if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday"  || dayOfWeek === "Wednesday"){
    exercise = "legs";
}else exercise = "arms";

alert("You should focus on " + exercise + " for your workout today.");