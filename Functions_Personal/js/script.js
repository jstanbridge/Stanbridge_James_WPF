//James Stanbridge
//26 Feb 2014
//Functions Personal

//This project will determine how many points a food costs in the Weight Watchers Points Plus system.

alert("Hello! With a few simple bits of information, we can find out how many Weight Watchers points your food is worth.");
//Introductory alert letting the user know what we're going to do.

function wwPoints(pro, carb, fat, fiber){
    result = (pro/11) + (carb/9) + (fat/4) - (fiber/35);
    return result;
}

wwPoints(prompt("How many grams of protein are in one serving?"), prompt("How many grams of carbohydrates are in one serving?"), prompt("How many grams of fat are in one serving?"), prompt("How many grams of fiber are in one serving?"));

console.log(result);

var totalPoints = result * prompt("How many servings are you eating?");

console.log(totalPoints);