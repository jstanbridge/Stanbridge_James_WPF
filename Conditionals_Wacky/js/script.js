//James Stanbridge
//20 Feb 2014
//Conditionals Wacky

//This project will determine if you are a hero or not.

alert("Welcome potential hero! We are going to determine whether or not you qualify for your Hero's License.");

var maidensSaved = prompt("During your training, how many maidens have you saved?");
if (maidensSaved === ""){
    prompt("You have to tell us how many maidens you have saved!");
    maidensSaved = prompt("During your training, how many maidens have you saved?");
}

var dragonsSlain = prompt("How many dragons have you slain?");
if (dragonsSlain === ""){
    prompt("I'll ask you again, how many dragons have you slain?");
    dragonsSlain = prompt("During your training, how many maidens have you saved?");
}

if (maidensSaved >= 30 && dragonsSlain >= 15){
    alert("Congratulations, you are a hero and worthy of your Hero's License!");
}else if (maidensSaved < 30 && dragonsSlain >= 15){
    alert("I'm sorry, but you haven't saved enough maidens to qualify yet. Please come back later.");
}else if (maidensSaved >= 30 && dragonsSlain < 15){
    alert("I'm sorry, but you haven't slain enough dragons to qualify yet. Please come back later.");
}else alert("I'm sorry, but you haven't saved enough maidens or slain enough dragons to qualify yet. Please come back later.");

