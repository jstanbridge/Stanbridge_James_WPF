//James Stanbridge
//13 Feb 2014
//Expressions (Industry)

//This script will calculate the width of a center column in a 3 column layout for a website.

alert("Hello, we are going to calculate the width of the center column of your web page. You can use this to quickly determine changes that should be made if you decide to change the width of one of your outer columns.");

var websiteWidth = prompt("What is the total width (in pixels) of you website?");
var lColWid = prompt("What is the width (in pixels) of your left-hand column?");
var rColWid = prompt("What is the width (in pixels) of your right-hand column?");

lColWid = +lColWid;