//James Stanbridge
//13 Feb 2014
//Expressions (Industry)

//This script will calculate the width of a center column in a 3 column layout for a website.

alert("Hello, we are going to calculate the width of the center column of your web page. You can use this to quickly determine changes that should be made if you decide to change the width of one of your outer columns.");
//Here we are setting up the initial alert to inform the user of what we are calculating.

var websiteWidth = prompt("What is the total width (in pixels) of your website?");
//Here we declare the variable for the total width of the website and add the appropriate prompt for the user.
var lColWid = prompt("What is the width (in pixels) of your left-hand column?");
//Here we declare the variable for the width of the left hand column of the website and add the appropriate prompt for the user.
var rColWid = prompt("What is the width (in pixels) of your right-hand column?");
//Here we declare the variable for the width of the right hand column of the website and add the appropriate prompt for the user.

lColWid = +lColWid;
//Now, we define lColWid as a number using the + symbol so it can be added later on.
rColWid = +rColWid;

lColWid+=rColWid;

cColWid = websiteWidth - lColWid;

alert("The center column of your 3-column website is " + cColWid +" pixels wide.");

console.log("The center column is " + cColWid + " pixels wide.");