//James Stanbridge
//20 Feb 2014
//Conditionals Industry

//This project will help a user determine whether JPEG of PNG is the best image type to use.

alert("We're going to determine whether you should use a PNG or JPEG image on your website.");
//This is the initial alert letting the user know what we're going to determine.

var fileSize = prompt("Do you need an image with a small file size?");
//This variable helps us track if the user is concerned about file size.
if (fileSize === ""){
    alert("You forgot to indicate whether or not file size was a concerned.");
    fileSize = prompt("Do you need an image with a small file size?");
    //The above is the validation check to make sure that the user put an answer in the file size prompt.
}

var trans = prompt("Do you need your image to have a transparent background?");
//This variable helps us track if the user needs a transparent background or not.
if (trans === ""){
    alert("You forgot to indicate whether you need a transparent background or not?");
    trans = prompt("Do you need your image to have a transparent background?");
    //The above is the validation check to make sure that the user put an answer in the transparent background prompt.
}

if (fileSize === "No" && trans === "No"){
    //The above condition is met when the user is not worried about file size or transparency.
    alert("You should use a JPEG file, since transparency is not an issue and the file size for a JPEG will be smaller than a PNG.");
    console.log("You should use a JPEG file, since transparency is not an issue and the file size for a JPEG will be smaller than a PNG.");
    //When the above condition is met, the above alert/console command is printed, informing the user of the best file type to use.
}else if (fileSize === "No" && trans === "Yes"){
    //The above condition is met when the user is not worried about file size but is worried about transparency.
    alert("You should use a PNG file since it will allow for a transparent background.");
    console.log("You should use a PNG file since it will allow for a transparent background.");
    //When the above condition is met, the above alert/console command is printed, informing the user of the best file type to use.
}else if (fileSize === "Yes" && trans === "No"){
    //The above condition is met when the user is worried about file size but is not worried about transparency.
    alert("You should use a JPEG file since the file size will be much smaller than if you were to use a PNG.");
    console.log("You should use a JPEG file since the file size will be much smaller than if you were to use a PNG.");
    //When the above condition is met, the above alert/console command is printed, informing the user of the best file type to use.
}



