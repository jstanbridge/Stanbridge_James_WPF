//James Stanbridge
//26 Feb 2014
//Functions Industry

//This project will calculate a week's wage with or without overtime.

alert("Let's calculate your wages for this week.");

wages(prompt("How much do you make per hour?"), prompt("How many hours did you work this week?"));

function wages(pay, hrsWrk){
    if (pay === 0 || hrsWrk === 0){
        alert("You forgot to fill in a field.");
    }else if (overtime === true){
        var withOT = function (otHrs){
            totalPay = (pay * hrsWrk) + (otHrs * pay * 2);
            return totalPay
        }else totalPay = pay * hrsWrk; return totalPay
    }
}