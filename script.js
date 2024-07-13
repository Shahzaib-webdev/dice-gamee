var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;

var randImg1 = "images/dice" + random1 + ".png";
var randImg2 = "images/dice" + random2 + ".png";
document.querySelector(".img1").setAttribute("src", randImg1);
document.querySelector(".img2").setAttribute("src", randImg2);


if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if (random1===random2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}

