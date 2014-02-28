//James Stanbridge
//26 Feb 2014
//Functions Wacky


//This project will give users a super hero catch phrase based on inputs.

var phrase;

quiz(prompt("How many letters are in your last name?"), prompt("What is the last number of the year you were born?"), prompt("Choose one of the following: (1) Science (2) Mutation (3) Neither"));

function quiz(lastName, yrBorn, mChoice){
    score = (+lastName) + (+yrBorn) + (+mChoice);
    //score = +score;
    return score;
}


if (score < 15){
    phrase = "Squirrel!";
}else if (score >= 15 && score < 20){
    phrase = "Here I come to save the day!";
}else if (score >= 20 && score < 25){
    phrase = "It's clobberin' time!";
}else if (score >= 25 && score < 30){
    phrase = "Cowabunga!";
}else if (score > 30){
    phrase = "Danger, Will Robinson!";
}


console.log(score);
console.log(phrase);

