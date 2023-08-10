var imgArray = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png' ];
var pic1 = imgArray[Math.floor(Math.random()*imgArray.length)];
var pic2 = imgArray[Math.floor(Math.random()*imgArray.length)];
var result =document.querySelector(".container h1");
if(pic1 > pic2){
  result.innerHTML = "Player 1 is win 🥳";
}else if(pic1 == pic2){
  result.innerHTML = "Game tie 😶";
}else{
  result.innerHTML = "Player 2 is win 🥳";
}
var href_1= document.querySelectorAll("img")[0];
var href_2 =document.querySelectorAll("img")[1];
console.log(href_1.setAttribute('src',pic1));
console.log(href_2.setAttribute('src',pic2));