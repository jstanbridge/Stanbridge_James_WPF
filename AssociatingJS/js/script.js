//Conditional Logic - Else If

var kidHeight = 47;
var minHeight = 48;
var wParent = 45;

//If the child is over the height of 48", print to the console "You can ride!"

if(kidHeight > minHeight){
    //Code performed if condition is true.
    console.log("You can ride!");
}else if(kidHeight > wParent){
    //You can ride with a parent present.
    console.log("You can ride, but only with a parent present.")
}else{
    //Code performed if condition is false.
    console.log("Sorry kid, you've got some growing to do!");
}