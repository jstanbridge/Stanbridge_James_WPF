//James Stanbridge
//20 Feb 2014
//Conditionals Wacky

//This project will determine if you are a hero or not.

alert("Welcome potential hero! We are going to determine whether or not you qualify for your Hero's License.");
//This is the initial alert to let the user know what we are focused on.

var maidensSaved = prompt("During your training, how many maidens have you saved?");
//This variable stores the amount of maidens saved by the user.
if (maidensSaved === ""){
    prompt("You have to tell us how many maidens you have saved!");
    maidensSaved = prompt("During your training, how many maidens have you saved?");
    //This is a validation check to make sure that the user has input something into the maidensSaved variable.
}

var dragonsSlain = prompt("How many dragons have you slain?");
//This variable stores the amount of dragons slain by the user.
if (dragonsSlain === ""){
    prompt("I'll ask you again, how many dragons have you slain?");
    dragonsSlain = prompt("During your training, how many maidens have you saved?");
    //This is a validation check to make sure that the user has input something into the dragonsSlain variable.
}

if (maidensSaved >= 30 && dragonsSlain >= 15){
    //This condition weighs the amount of maidensSaved and dragonsSlain to see if they meet qualifications for a Hero's License.
    alert("Congratulations, you are a hero and worthy of your Hero's License!");
    //This alert is printed when the user meets the above condition.
}else if (maidensSaved < 30 && dragonsSlain >= 15){
    //This condition weighs the amount of maidensSaved and dragonsSlain to see if they meet qualifications for a Hero's License.
    alert("I'm sorry, but you haven't saved enough maidens to qualify yet. Please come back later.");
    //This alert is printed when the user meets the above condition.
}else if (maidensSaved >= 30 && dragonsSlain < 15){
    //This condition weighs the amount of maidensSaved and dragonsSlain to see if they meet qualifications for a Hero's License.
    alert("I'm sorry, but you haven't slain enough dragons to qualify yet. Please come back later.");
    //This alert is printed when the user meets the above condition.
}else alert("I'm sorry, but you haven't saved enough maidens or slain enough dragons to qualify yet. Please come back later.");
//This is the final condition if no of the above conditions are met.

