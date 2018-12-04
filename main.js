
// Game plan.

// My game is going to be a text based adventure game based on th story Pilgrims progress, Journey to the celestial city. 
//I want to incoporate sound, time, images and score keeping in the game.  If you get the right answer within a set  time, you move on to the next level, and accumulate points as you go. If you get the answer wrong or don't click on the right action, you don't move on to the next level.

//These are some of what I will be incoporating into codng the game:

// A time counter 
//Score keeping-tallying the scores. A system that reveals the scores at the end of the game. 
//Else if and switch staments.
//Loops i will be using are for loops and while loops.
// Event listeners (click) and some animation affects.
//Sound --music, that changes at every level 
//Good images and animation. I will look into canvas--however, if i find it too difficult to comprehend, I will not incoporate canvas into my game.


// (1) Time counter 

// In may game for you to get points and move on to the next level, you have to click on the right answer before time runs out. Therefore the function for this to work, will have to read like this:

//"If player, clicks on the right answer before counter gets to zero, award them with 5 points and  go on to the next level--then reset counter. 
//Else player clicks on the wrong answer whilst the counter is going and/ or doesnt click on an answer, make them repeat the level (while loop will be used here)."
//players will be given 60 seconds to answer the question. I'll be using setTimeout for this because it ony calls the function once and

//var timer = document.getElementById("timer").innerHTML = "0";

// function Level () {}

//setTimeout( Level, 60000 )

// I am using the setTimeout becaus i only want the level to happen once, unless the player repeats it or fails it. Level is the function . The event is 60000 milliseconds, 60 seconds, which willbe how long the player takes to answer the questions

// i want to access the timer elemenet so i slect its class id.

//function countDown()

//function template for game 





//for getting the right or wrong answer n the level




//let levelOne = 

function correctAnswerLevelOne() {
  document.getElementById("result-message").innerHTML = "Well Done, You are through to the next level!"
}
const correctAnswer = document.getElementById("answerOne").addEventListener("click", function () {
  console.log("Check!")
  correctAnswerLevelOne()
});


//function template for the wrong answer
function wrongAnswer() {
  document.getElementById("result-message").innerHTML = "You were not successful this time, Please repeat again."
}
const wrongAnswer = document.getElementById("answerTwo").addEventListener("click", function () {
  console.log("whack!")
  wrongAnswer()
});


//tree of life function template
//var treeOfLifePage = document.title("")

//if (treeOfLifePage === document.getElementById//("levelTree")) {
// function treeOfLife1() {
//  document.getElementById("first-message")//.innerText = "Its leaves";
// }
//treeOfLifeOne = document.getElementById//("tree-of-life-one").addEventListener("click", //treeOfLife1)
//};


//function treeOfLife2() {
  ///document.getElementById("second message").innerText = "Are for";
//}
//const treeOfLifeTwo = document.getElementById("tree-of-life-two").addEventListener("click", function () {
  //console.log("leaves2");
  //treeOfLife2();
//});

//function treeOfLife3() {
  //document.getElementById("third-message").innerText = "Your healing";
//}
//const treeOfLifeThree = document.getElementById("tree-of-life-three").addEventListener("click", function () {
  //console.log("leaves3");
  ////treeOfLife1();
//});

// if any of the buttons are clicked , then there will be a healing level point system, where the points increase.

