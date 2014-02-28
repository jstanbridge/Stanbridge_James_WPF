//James Stanbridge
//26 Feb 2014
//Functions Wacky


//This project will give users a super hero catch phrase based on inputs.

alert("We're going to determine what your super hero catchphrase is based on some simple questions");
//This is th einitial alert to let the user know what we are doing.

var phrase;
//Declaring the variable phrase for later use.

quiz(prompt("How many letters are in your last name?"), prompt("What is the last number of the year you were born?"), prompt("Choose one of the following: (1) Science (2) Mutation (3) Neither"));
//Function call with prompts for parameter inputs.

function quiz(lastName, yrBorn, mChoice){
    //Function with parameters.
    score = (+lastName) + (+yrBorn) + (+mChoice);
    //This line does the calculation for the function.
    return score;
    //This line returns the value of the calculation to where it was called from.
}


if (score < 15){
    //First condition relating to the value of the score variable.
    phrase = "\"Squirrel!\"";
    //Result if the first condition is met.
}else if (score >= 15 && score < 20){
    //Second condition relating to the value of the score variable.
    phrase = "\"Here I come to save the day!\"";
    //Result if the second condition is met.
}else if (score >= 20 && score < 25){
    //Third condition relating to the value of the score variable.
    phrase = "\"It's clobberin' time!\"";
    //Result if the third condition is met.
}else if (score >= 25 && score < 30){
    //Fourth condition relating to the value of the score variable.
    phrase = "\"Cowabunga!\"";
    //Result if the fourth condition is met.
}else if (score > 30){
    //Final condition relating to the value of the score variable.
    phrase = "\"Danger, Will Robinson!\"";
    //Result if the final condition is met.
}

alert("Your super hero catchphrase is " + phrase + ".");
alert("Your super hero catchphrase is " + phrase + ".");
//These two lines return the result to the user and the console.




