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

var timer = document.getElementById("timer").innerHTML = "timer";
// i want to access the timer elemenet so i slect its class id.

function countDown()

//function template for game 


