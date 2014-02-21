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

if (fileSize === "No" && trans === "No"){
    alert("You should use a JPEG file, since transparency is not an issue and the file size for a JPEG will be smaller than a PNG.");
    console.log("You should use a JPEG file, since transparency is not an issue and the file size for a JPEG will be smaller than a PNG.");
}else if (fileSize === "No" && trans === "Yes"){
    alert("You should use a PNG file since it will allow for a transparent background.");
    console.log("You should use a PNG file since it will allow for a transparent background.");
}else if (fileSize === "Yes" && trans === "No"){
    alert("You should use a JPEG file since the file size will be much smaller than if you were to use a PNG.");
    console.log("You should use a JPEG file since the file size will be much smaller than if you were to use a PNG.");
}else if (fileSize === "No" && trans === "No"){
    alert("You should use a JPEG file since the file size will be smaller and you aren't concerned about transparency.");
    console.log("You should use a JPEG file since the file size will be smaller and you aren't concerned about transparency.");
}



