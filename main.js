//stage one variables

//Score and level
var currentLevel = 1;
var currentScore = 0;
//Theme
var Heading1 = document.getElementById("stage&level");
var Heading2 = document.getElementById("levelName");
var image = document.getElementById("imageforlevel");
var question = document.getElementById("para");
var scoreElement = document.getElementById("score");
//Buttons
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var AnswerFour = document.getElementById("answerFour");
//going from level one to level two

// function checkAnswer(answer) {
//  if(buttonClicked === answer) {
//    go to next level
//  } else {
//    do not go, give more time or ask the user to try again
//  }
// }
//Headings and levels 

//these are the functions called when the if else statements are true.
function goLevel2() {
  currentLevel = 2;
  Heading1.innerHTML = "Level Two";
  Heading2.innerHTML = "meeting Evangelist";
  image.src = "Images_for_pilgrims_progress/ScreenShot2018-12-03at14.17.35.png";
  question.innerHTML = "you managed to get past the crowd";
}

function goLevel3() {
  currentLevel = 3;
  Heading1.innerHTML = "Level three";
  Heading2.innerHTML = "we getting there";
  image.src = "Images_for_pilgrims_progress/JohnBunyan.png";
  question.innerHTML = "randomness";
}

function goLevel4() {
  currentLevel = 4;
  Heading1.innerHTML = "Level 4";
  Heading2.innerHTML = "almost there";
  image.src = "Images_for_pilgrims_progress/ScreenShot2018-12-03at14.17.35.png";
  question.innerHTML = "progress--yeh yeah yeah ";
}

// if the current level (number) then the player has to click on the right button (number) which corresposnds to answer one, two and three. then the score level incremennts. if they click on the worng answer then thy get an alert saying wrong answer. there  will be amny if else statemennts becasue my game willhave alot of levels.
function clickButton(button) {

  if (currentLevel == 1) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel2();
      currentScore += 5;
    } else {
      alert('wrong answer');
    }
  } else if (currentLevel == 2) {
    var correctButton = 4;
    if (button == correctButton) {
      goLevel3()
      currentScore += 5;
    } else {
      alert('wrong answer');
    }
  }
  else if (currentLevel == 3) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel4()
      currentScore += 5;
    } else {
      alert('wrong answer');
    }
  }

  //score element = current score. innerHtml  is put in here so that the score can show on the html page.
  scoreElement.innerHTML = currentScore;
}





//event clickers for the buttons, answerone is  button one and answer two is button two etc.
answerOne.addEventListener("click", function () {
  clickButton(1);
});

answerTwo.addEventListener("click", function () {
  clickButton(2);
});

answerThree.addEventListener("click", function () {
  clickButton(3);
});

AnswerFour.addEventListener("click", function () {
  clickButton(4);
});





/*
function goLevel2() {
  Heading1.innerHTML = "Stage One Level Two";
  Heading2.innerHTML = "meeting Evangelist";
  image.src = "Images_for_pilgrims_progress/ScreenShot2018-12-03at14.17.35.png";
  question.innerHTML = "you managed to get past the crowd";
  //answerTwo = answer
  //checkLevel(answerTwo)
};


if (answerOne === document.getElementById("answerOne")) {
  answerOne.addEventListener("click", function () {
    console.log("Check!")
    goLevel2();

  });
}


//going from level two to level three
function goLevel3() {
  Heading1.innerHTML = "Stage One Level Three";
  Heading2.innerHTML = "big burdens";
  image.src = "Images_for_pilgrims_progress/JohnBunyan.png";
  question.innerHTML = "you aint serious";
}
if (answerTwo === document.getElementById("answerTwo")) {
  answerTwo.addEventListener("click", function () {
    console.log("Check2")
    goLevel3()
  });
}









//going from level three to level four 
function goLevel4() {
  Heading1.innerHTML = "Stage One Level four";
  Heading2.innerHTML = "slowly getting there";
  image.src = "Images_for_pilgrims_progress/JohnBunyan.png";
  question.innerHTML = "is it working yet";
}

if (answerFour === document.getElementById("answerFour")) {
  answerFour.addEventListener("click", function () {
    console.log("Check6")
    goLevel4()
  });
}






//for correct ansnwer and moving into the next level
//var correctAnswer = document.getElementById("answerOne").addEventListener("click", function () {
 // console.log("Check!")
  //correctAnswerLevelOne()
//});


//function correctAnswerLevelOne() {

  //document.getElementById("levelName").innerHTML = " Meeting Evange";
  //document.getElementById("para").innerHTML = "you managed to get past the crowd";
  //document.getElementById("imageforlevel").src = "Images_for_pilgrims_progress/ScreenShot2018-12-03at14.17.35.png";
//}






*/






