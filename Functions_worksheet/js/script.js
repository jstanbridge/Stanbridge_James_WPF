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


alert("The Circumference of the circle is " + circCal);
console.log("The Circumference of the circle is " + circCal);



//STUNG!

function beeSti(w)
{
    death = 8.67 * w;

    return death;
}

alert("Have you ever wondered how many bee stings you could withstand before you died? Me neither, but we're going to find out.");
beeSti(prompt("How many pounds do you weigh?"));

alert("You could withstand " + death + " stings before you died.");
console.log("You could withstand " + death + " stings before you died.");