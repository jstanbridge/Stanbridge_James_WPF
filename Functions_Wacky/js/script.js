//James Stanbridge
//26 Feb 2014
//Functions Wacky

//This project will give users a super hero catch phrase based on inputs.

/*
It's clobberin' time! (<25 && >=20)
Danger! Will Robinson! (>30)
To infinity and beyond! (YES/NO)
Squirrel! (<15)
Cowabunga! (<=30 && >=25)
Here I come to save the day! (<20 && >= 15)
 */
var phrase;

quiz(prompt("How many letters are in your last name?"), prompt("What is the last number of the year you were born?"), prompt("Choose one of the following: (1) Science (2) Mutation (3) Neither"));
var space = prompt("Do you like outer space? (YES/NO)");

space = true ? (phrase = "It's clobberin' time!") : (phrase = score);

function quiz(lastName, yrBorn, mChoice){
    score = lastName + yrBorn + mChoice;
    return score
}

/*
var score
 */

/*
var if
 */