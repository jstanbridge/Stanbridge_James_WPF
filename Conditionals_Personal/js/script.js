//James Stanbridge
//20 Feb 2014
//Conditionals Personal

//This project will help determine what body area to workout when given the day of the week.

alert("Hi, we're going to help you determine what body area you should workout this week");
//Here we set the initial alert to let the user know what we are doing.

var run = prompt("Have you run this week?");
//Here we set the prompt to find out if the user has run this week.
var dayOfWeek = prompt("What day of the week is it?");
//Here we set the prompt to determine the day of the week.

if (run === "No"){
    //This condition is fulfilled is the user states that they have not run this week.
    exercise = "cardio";
    //If the above condition is true, then exercise is set to cardio.
}else if (dayOfWeek === "Monday" || dayOfWeek === "Wednesday"  || dayOfWeek === "Friday"){
    exercise = "legs";
    //If the above condition is false and the day of the week is Monday, Wednesday, or Friday, then exercise is set to legs.
}else exercise = "arms";
    //If none of the conditions above are true, then exercise is set to arms.

alert("You should focus on " + exercise + " for your workout today.");
console.log("You should focus on " + exercise + " for your workout today.");