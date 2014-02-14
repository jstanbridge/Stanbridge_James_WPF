//James Stanbridge
//13 Feb 2014
//Expressions (Wacky)

alert("Greetings Captain, I am Commander El Tigre.");
//This alert begins the dialogue for our story/script.
alert("As you know, we are facing especially dark days. The hordes of men lie upon our borders and we are hard pressed to defend ourselves.");
//Another alert to further push the story along.
alert("But never before have all the species of animals united as we have now. We, the proud Royal Army of Zooria, shall not let this nation fall.");
//Another alert to further push the story along.
alert("We have turned to our greatest scientist, Dr. Elefaunt, to create a new weapon to help us face the threat of man. I have summoned you here today to give you the task of assembling the materials needed to craft such a weapon.");
//Another alert to further push the story along.
alert("You will deliver instructions to four platoons. Three must be selected from these six: Monkeys, Horses, Bears, Rhinos, Vultures, and Bats. The last, you may choose freely.");
//Another alert to further push the story along.

var aniOne = prompt("Which platoon from the six (Monkeys, Horses, Bears, Rhinos, Vultures, Bats) will you choose first?");
//Here we are declaring a variable for animal #1 and defining it via user input. This is really only for flavor and will not factor into our equation.
var aniTwo = prompt("They do have some strategic advantages. Now, what is your second choice?");
//Here we are declaring a variable for animal #2 and defining it via user input. This is really only for flavor and will not factor into our equation.
var aniThree = prompt("I see. Perhaps I would have chosen a different group, but I will defer to your judgement. Now, your final choice from the six, what is it?");
//Here we are declaring a variable for animal #3 and defining it via user input. This is really only for flavor and will not factor into our equation.
var aniFour = prompt("Excellent choice! But you still have one final choice to make. Any animal platoon, your choice. What do you pick?");
//Here we are declaring a variable for animal #4 and defining it via user input. This is really only for flavor and will not factor into our equation.

alert("A most odd choice indeed. We shall see if you have chosen rightly soon enough.");
//Another alert to further push the story along.
alert("Now for the instructions. Each group is tasked to seek out and collect as much fruit as possible within the next 24 hours. Each platoon should focus on a single type of fruit. Come back to me in 24 hours to make your report. Good luck, Captain.");
//Another alert to further push the story along.
alert("*Time Passes*");
//Another alert to further push the story along.
alert("Ah, I see you are back. I hope the operation has gone well.");
//Another alert to further push the story along.

var fruOne = prompt("Now for your report, start with the " + aniOne + " Platoon. What type of fruit did they collect?");
var fruOneNum = prompt("How many pieces did they manage to acquire? (Please enter a numerical value, such as 10 or 15)");
var fruTwo = prompt("Hmm, " + fruOne + ". And the " + aniTwo + " Platoon? What type of fruit did they collect?");
var fruTwoNum = prompt("How many pieces did they manage to acquire? (Please enter a numerical value, such as 10 or 15)");
var fruThree = prompt("Alright, moving on. What type of fruit did the " + aniThree + " Platoon collect?");
var fruThreeNum = prompt("How many pieces did they manage to acquire? (Please enter a numerical value, such as 10 or 15)");
var fruFour = prompt("I am starting to question if you were the right animal for this task. Let us hope your personal favorites did better. So, what fruit did the " + aniFour + " Platoon collect?");
var fruFourNum = prompt("How many pieces did they manage to acquire? (Please enter a numerical value, such as 10 or 15)");

alert("Now, the moment of truth.");
alert("Dr. Elefaunt has created a giant fruit cannon. The cannon can fire off 10 pieces of fruit per shot and each shot will destroy 3 platoons of men.");

fruOneNum = +fruOneNum;
fruTwoNum = +fruTwoNum;
fruThreeNum = +fruThreeNum;
fruFourNum = +fruFourNum;

var fruPerShot = 10;
var allFru=[fruOneNum,fruTwoNum,fruThreeNum,fruFourNum];
console.log(allFru);
var fruTotal = +allFru[0] + +allFru[1] + +allFru[2] + +allFru[3];
var platDestroyed = (fruTotal%fruPerShot) * 3;
console.log(fruTotal);
var fruRem = fruTotal%fruPerShot;
fruTotal-=fruRem;
var canShots = fruTotal / fruPerShot;



alert("With the pieces of fruit your platoons acquired we can fire the cannon " + canShots + " times, wiping out " + platDestroyed + " platoons of men with " + fruRem + " pieces of fruit left over. I do not know whether to be proud or disappointed, but we will have to make do with what you have managed to scrounge up. Now, get your platoons back out there and find more fruit! Dismissed!");











