//James Stanbridge
//20 Feb 2014
//Conditionals Personal

//This project will help determine what body area to workout when given the day of the week.

alert("Hi, we're going to help you determine what body area you should workout this week");

var dayOfWeek = alert("What day of the week is it?");
var run = alert("Have you run this week?");


if (dayOfWeek = "Monday" || "Tuesday"  || "Wednesday"){
    exercise = "legs";
}else if (run = "No"){
    exercise = "cardio";
}else exercise = "arms";