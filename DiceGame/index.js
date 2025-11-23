// let randomNumber1 = Math.random(images)
// randomNumber1 = randomNumber1 * 6
// randomNumber1 = Math.floor(randomNumber1) + 1
// console.log(randomNumber1)
// all above code have written below have written in one line

let randomNumber1 = Math.floor(Math.random() * 6) + 1//1-6
let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png -dice6.png
let randomimageSource = "images/" + randomDiceImage;//images/dice1.png -images/dice6.png
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomimageSource2 =  "images/dice" +  randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",randomimageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 wins!"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "play 2 wins!"

}else {
    document.querySelector("h1").innerHTML ="draw!"
}