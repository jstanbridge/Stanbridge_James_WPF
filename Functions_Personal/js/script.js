//James Stanbridge
//26 Feb 2014
//Functions Personal

//This project will determine how many points a food costs in the Weight Watchers Points Plus system.

alert("Hello! With a few simple bits of information, we can find out how many Weight Watchers points your food is worth.");
//Introductory alert letting the user know what we're going to do.

function wwPoints(pro, carb, fat, fiber){
    //Here we are setting up the function and it's parameters.
    result = (pro/11) + (carb/9) + (fat/4) - (fiber/35);
    //This is the calculation that will run when the function is called.
    return result;
    //Here we return the result to where the function was called.
}

wwPoints(prompt("How many grams of protein are in one serving?"), prompt("How many grams of carbohydrates are in one serving?"), prompt("How many grams of fat are in one serving?"), prompt("How many grams of fiber are in one serving?"));
//This is the call for the function and includes prompts for the parameters of the function.

var totalPoints = result * prompt("How many servings are you eating?");
//This makes the final calculation and assigns it to the variable totalPoints.

alert("Your food totals " + totalPoints + " Weight Watchers Points.");
console.log("Your food totals " + totalPoints + " Weight Watchers Points.");
//These two lines send the final result to the user and the console.