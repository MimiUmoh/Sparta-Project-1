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

//function template for right answer
function wellDone() {
  document.getElementById("result-message").innerHTML = "Well Done, YOu are through to the next level!"
}
const correctAnswer = document.getElementById("correct").addEventListener("click", function () {
  console.log("Check!")
  wellDone()
})
//function template for the wrong answer
function tooBad() {
  document.getElementById("result-message").innerHTML = "You were not successful this time, Please repeat again."
}
const wrongAnswer = document.getElementById("wrong-one").addEventListener("click", function () {
  console.log("whack!")
  tooBad()
})

//Or maybe when the user clicks on the right answer there is a href within the right answer that will go immediately to the next level . the right answer will do this instead of displaying the message well done. when the user clicks on the right answer a score is logged in and points are generated. 

//An isntructions page will be at the front page. The reader will see it before starting the game.

