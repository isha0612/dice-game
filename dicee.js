
var randomNumber1 = Math.floor(6 * Math.random()) + 1;

var randomImageNo1 = "dice" + randomNumber1 + ".png";

var randomImage1 = "images/" + randomImageNo1;

(document.querySelectorAll("img")[0]).setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(6 * Math.random()) + 1;

var randomImageNo2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + randomImageNo2;

(document.querySelectorAll("img")[1]).setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
