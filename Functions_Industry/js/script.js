//James Stanbridge
//26 Feb 2014
//Functions Industry

//This project will determine if your weekly wages are above, below, or equal to the US national average.

alert("Let's calculate your wages for this week.");
alert("Please be sure to enter all numerical values in the following prompts.");
//These are the initial alerts to inform the user of what we are doing.

function wages(pay, hrsWrk, otHrs){
    //Here we set up the function for use later on, giving it a name and establishing it's parameters.
    paycheck = (pay * hrsWrk) + (otHrs * pay * 2);
    //This line is the calculation that is executed when the function is called.
    return paycheck
    //This line returns the value of the calculation back to where it was called from.
}


wages(prompt("How much do you make per hour?"), prompt("How many hours did you work this week?"), prompt("How many hours of overtime did you work this week?"));
//This is the call for the function above. Parameters are set using prompts for user input.

var natAvg = 833;
//This variable holds the US weekly nation average income.

if (paycheck > natAvg){
    //Here we are setting up a condition for a weekly income that is above the national average.
    alert("Congratulations, with the $" + paycheck + " you made this week, you've exceeded the US national average for hourly paid jobs.");
    console.log("Congratulations, with the $" + paycheck + " you made this week, you've exceeded the US national average for hourly paid jobs.");
    //If the condition above is met, then the result prints to both the user and the console log.
}else if (paycheck === 833){
    //Here we are setting up a condition for a weekly income that is equal to the national average.
    alert("With the $" + paycheck + " you made this week, you tied the US national average for hourly paid jobs.");
    console.log("With the $" + paycheck + " you made this week, you tied the US national average for hourly paid jobs.");
    //If the condition above is met, then the result prints to both the user and the console log.
}else alert("Unfortunately, the $" + paycheck + " that you made this week does not exceed the US national average for hourly paid jobs.");
console.log("Unfortunately, the $" + paycheck + " that you made this week does not exceed the US national average for hourly paid jobs.");
//Lastly, if none of the other conditions are met, then we have a result of < the national average and the result prints to both the user and the console log.
