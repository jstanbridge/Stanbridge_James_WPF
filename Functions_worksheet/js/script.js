//James Stanbridge
//20 Feb 2014
//Functions Worksheet

//CIRCUMFERENCE

function circ(r)
//Here we are declaring the function, naming it, and setting it's parameters.
{
    circCal = 3.14 * r * 2;
    //This line of code set up the calculation performed by the function when it is called.

    return circCal;
    //This line returns the result of the above calculation to where the function was called from.
}

alert("Let's figure out that circumference of a circle!");
//Initial alert telling the user what we're doing.
circ(prompt("What is the circle's radius?"));
//This is the call for the function, and instead of a static parameter, we've set it up so it will dynamically add a value based on user input.


alert("The Circumference of the circle is " + circCal);
console.log("The Circumference of the circle is " + circCal);
//These two lines return the result to the user and the console.



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