//James Stanbridge
//26 Feb 2014
//Functions Industry

//This project will determine if your weekly wages are above, below, or equal to the US national average.

alert("Let's calculate your wages for this week.");
alert("Please be sure to enter all numerical values in the following prompts.");

function wages(pay, hrsWrk, otHrs){
    paycheck = (pay * hrsWrk) + (otHrs * pay * 2);
    return paycheck
}


wages(prompt("How much do you make per hour?"), prompt("How many hours did you work this week?"), prompt("How many hours of overtime did you work this week?"));

if (paycheck > 833){
    alert("Congratulations, with the $" + paycheck + " you made this week, you've exceeded the US national average for hourly paid jobs.");
    console.log("Congratulations, with the $" + paycheck + " you made this week, you've exceeded the US national average for hourly paid jobs.");
}else if (paycheck === 833){
    alert("With the $" + paycheck + " you made this week, you tied the US national average for hourly paid jobs.");
    console.log("With the $" + paycheck + " you made this week, you tied the US national average for hourly paid jobs.");
}else alert("Unfortunately, the $" + paycheck + " that you made this week does not exceed the US national average for hourly paid jobs.");
console.log("Unfortunately, the $" + paycheck + " that you made this week does not exceed the US national average for hourly paid jobs.");

