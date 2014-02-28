//James Stanbridge
//26 Feb 2014
//Functions Industry

//This project will calculate a week's wage with or without overtime.

/* alert("Let's calculate your wages for this week.");

var overtime = prompt("Did you work overtime this week?");

if (overtime === "Yes"){
    var otHrs = prompt("How many hours of overtime did you work?");
    wages(prompt("How much do you make per hour?"), prompt("How many hours did you work this week?"));
}else wages(prompt("How much do you make per hour?"), prompt("How many hours did you work this week?"));



if (pay == 0 || hrsWrk == 0){
        alert("You forgot to fill in a field.");
        wages(prompt("How much do you make per hour?"), prompt("How many hours did you work this week?"));
    }else if (overtime === "Yes"){
        var withOt = function(otHrs){
            totalPay = (pay * hrsWrk) + (otHrs * pay * 2);
            alert("Including overtime, you made $" + totalPay + " this week.");
        }
    }else var noOt = function wages(pay, hrsWrk){
    totalPay = (pay * hrsWrk) + (otHrs * pay * 2);
    alert("You made $" + totalPay + " this week.");
} */

alert("Let's calculate your wages for this week.");
alert("Please be sure to enter all numerical values in the following prompts.");

function wages(pay, hrsWrk, otHrs){
    paycheck = (pay * hrsWrk) + (otHrs * pay * 2);
    return paycheck
}


wages(prompt("How much do you make per hour?"), prompt("How many hours did you work this week?"), prompt("How many hours of overtime did you work this week?"));

if (paycheck > 833){
    alert("Congratulations, with the $" + paycheck + " you made this week, you've exceeded the US national average for hourly paid jobs.");
}else if (paycheck === 833){
    alert("With the $" + paycheck + " you made this week, you tied the US national average for hourly paid jobs.")
}else alert("Unfortunately, the $" + paycheck + " that you made this week does not exceed the US national average for hourly paid jobs.");


/*
var pay
var hrsWrk
var otHrs

calc pay * hrsWrk

if overtime then add that

print results
*/
