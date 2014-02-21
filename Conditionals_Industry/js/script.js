//James Stanbridge
//20 Feb 2014
//Conditionals Industry

//This project will help a user determine whether JPEG of PNG is the best image type to use.

alert("We're going to determine whether you should use a PNG or JPEG image on your website.");
//This is the initial alert letting the user know what we're going to determine.

var fileSize = prompt("Do you need an image with a small file size?");
if (fileSize === ""){
    alert("You forgot to indicate whether or not file size was a concerned.");
    fileSize = prompt("Do you need an image with a small file size?");
}

var trans = prompt("Do you need your image to have a transparent background?");
if (trans === ""){
    alert("You forgot to indicate whether you need a transparent background or not?");
    trans = prompt("Do you need your image to have a transparent background?");
}
