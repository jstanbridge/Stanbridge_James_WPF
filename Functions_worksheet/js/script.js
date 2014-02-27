//James Stanbridge
//20 Feb 2014
//Functions Worksheet

//CIRCUMFERENCE

function circ(r)
{
    circCal = 3.14 * r * 2;

    return circCal;
}

alert("Let's figure out that circumference of a circle!");
circ(prompt("What is the circle's radius?"));

console.log("The Circumference of the circle is " + circCal);