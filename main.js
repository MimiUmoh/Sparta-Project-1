//Pilgrims progress
//Score and level
var currentLevel = 1;
var currentScore = 0;
//Theme
var Heading1 = document.getElementById("stagelevel");
var Heading2 = document.getElementById("levelName");
var image = document.getElementById("imageforlevel");
var question = document.getElementById("para");
var scoreElement = document.getElementById("score");
var promptMessage = document.getElementById("promptMessage");
//Buttons
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var AnswerFour = document.getElementById("answerFour");
//these are the functions called when the if else statements are true.
//go level 2
function goLevel2() {
  currentLevel = 2;
  Heading1.innerHTML = "Level Two";
  Heading2.innerHTML = "Meeting Evangelist";
  image.src = "PilgrimProgress/evangelist.png";
  question.innerHTML = "Yippy!! You are now on your way to the Celestial city. You really don’t know what awaits you, however, you are sure that you have made one of the best decisions of your life.  In the Fields you see a man called Evangelist. Evangelist points you to a distant light in the sky and tells you to follow it until you reach a wicket gate—then, you will know what to do. All of a sudden, you see two of your neighbours called Obstinate and Pliable running towards you. You wonder why. They tell you to not make the risky journey towards the Celestial city. They seem really worried and concerned about you, and so they  try to persuade you to go back to the city of destruction. What should you do?";
  answerOne.innerHTML = " Try and persuade them to come on the journey with you";
  answerTwo.innerHTML = " Go back to the City of Destruction";
  answerThree.innerHTML = "Continue talking to them. Allow them to dissuade you";
  AnswerFour.innerHTML = "You don’t listen to them, you continue your journey";
}
//go level 3
function goLevel3() {
  currentLevel = 3;
  Heading1.innerHTML = "Level Three";
  Heading2.innerHTML = " Slough of Despond";
  image.src = "PilgrimProgress/levelthree.png";
  question.innerHTML = "You choose to go on The journey regardless of what they were saying to you. However, Pliable was won over by you argument about the Celestial City, so he chooses to come on the Journey with you. You two are now approaching a slough called the Slough of Despond—a dark and gloomy place, where many travellers have drowned. What do you decide to do? ";
  answerOne.innerHTML = "Go through the slough and risk drowning";
  answerTwo.innerHTML = "Revert back to where Obstinate and Pliable  caught up with you,  and try to find a shortcut";
  answerThree.innerHTML = "Go back to the City of Destruction; this Journey is too difficult ";
  AnswerFour.innerHTML = " Go back to where you met Evangelist so he can offer you help and advice";
}
//go level 4
function goLevel4() {
  currentLevel = 4;
  Heading1.innerHTML = "Level 4";
  Heading2.innerHTML = "Mr Wiseman";
  image.src = "PilgrimProgress/levelFour.png";
  question.innerHTML = "Ahh ! You decided to go through the despondent slough. Due to the heavy burdens on your back, you are sinking. Pliable was angry, and has now left you.  Fortunately for you, a man called Help appears out of no where; he points you to some stepping stones to help you get out of the slough. Now, you can continue your journey towards the wicket gate to the Celestial City. As you go your way, you suddenly come across a man called Mr “Wiseman”, who dwells in the town of Worldly Policy. Mr “Wiseman” then says to you, “I see you there, good man, those burdens on your back must be giving you reprehensible pain. I know of a noble man that can take your burdens away; the name of this good fellow is Mr Legality.  This path you are on will not lead you to Mr legality; be a good lad and go down this hill that will take you to his abode.” Mr Wiseman shows you the direction. You are in dire need of help and, seriously, need to get rid of your burdens. What SHOULD you do?";
  answerOne.innerHTML = " Don’t listen to Mr “Wiseman” even though his advise seems feasible and well-intended ";
  answerTwo.innerHTML = "Go down the hill to find Mr Legality ";
  answerThree.innerHTML = "Go back with Mr “Wiseman” to the Town of Worldly Policy to get some food to eat";
  AnswerFour.innerHTML = "Just continue entertaining Mr “Wiseman” by talking to him";
}
//go level 5
function goLevel5() {
  currentLevel = 5;
  Heading1.innerHTML = "Level 5";
  Heading2.innerHTML = " The Castle";
  image.src = " PilgrimProgress/level 5.png";
  question.innerHTML = " Yes, that is right you SHOULD not have listened to Mr “Wiseman” even though his advice was feasible and well-intended. He has now directed you off the right path.  The hill has led you to an enormous, thundering mountain. Luckily for you, Evangelist appears and warns you of Mr Legality, and also tells you to go back to where you strayed off.  You are now back on the right path again. You walk further and see a hill; on the hill you see a dark castle with menacing figures surrounding it.  Should you approach the castle? Please click on the buttons: YES or NO.";
  answerOne.innerHTML = "YES";
  answerTwo.innerHTML = " NO";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 6
function goLevel6() {
  currentLevel = 6;
  Heading1.innerHTML = " Level 6";
  Heading2.innerHTML = " Goodwill ";
  image.src = "PilgrimProgress/level6.png";
  question.innerHTML = " So, you decide to not approach the menacing looking castle. But on the opposite side there is a house, which you approach instead.  As you walk towards the door, a few arrows are being aimed at you--you manage to miss them!. You manage to knock on the door. A man opens the door called Goodwill, who informs you that those arrows came from the Dark lord Beelzebub, who owns the castle. You tell Goodwill about your burdens and he tells you that no one can take them off for you. Goodwill then says,” you must keep to the strait and narrow path: it will lead you to a place of deliverance, where your burdens will be lifted off.” After your innocuous and instructive encounter with Goodwill, you continue your journey.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = " Continue your journey ";
  AnswerFour.innerHTML = " ";
}
//go level 7
function goLevel7() {
  currentLevel = 7;
  Heading1.innerHTML = " Level 7";
  Heading2.innerHTML = " Men in armour";
  image.src = "PilgrimProgress/level7.png";
  question.innerHTML = "You make your way to the house of Interpreter. He gives you wonderful insights for your journey. He then leads you to a gateway. There, sat a man on a table with a book to take-down the names of those, who wished to pass through the wicket gate. The gate was guarded by men in armour, who looked ready to do harm to anyone, who wished to go through the gate. Many people didn’t dear go through the gate due to fear. Then mightily, a Valiant man, holding a sword battled with the men in armour and cleared the way.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = "Continue your journey";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 8 
function goLevel8() {
  currentLevel = 8;
  Heading1.innerHTML = " Level 8";
  Heading2.innerHTML = "Burdens fall ";
  image.src = "PilgrimProgress/level8.png";
  question.innerHTML = "You, Christian, walk out of the gate. You see a road fenced on every side. You decide to walk down the road. At the foot of the hill, you pass an open tomb. You then find yourself beneath a way side cross.  As you come under its shadow, you burdens begins to fall off. Yes! You are finally free from your burdens!!!  All of a sudden three unusual figures appear from the ether; they are shining. What are they?";
  answerOne.innerHTML = "fairies";
  answerTwo.innerHTML = " The shining ones--Angels of light ";
  answerThree.innerHTML = "White witches ";
  AnswerFour.innerHTML = " Aliens";
}
//go level 9
function goLevel9() {
  currentLevel = 9;
  Heading1.innerHTML = "Level 9";
  Heading2.innerHTML = " The Shining Ones";
  image.src = " PilgrimProgress/level9.png";
  question.innerHTML = "The three shining Ones are angels of light. One of them takes away your old clothes and replaces them with new ones. Another gives you a parchment and tells you to guard it till you get to the Celestial City.  The other tells you that there are great dangers ahead of you.";
  answerOne.innerHTML = " Continue your Journey";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 10
function goLevel10() {
  currentLevel = 10;
  Heading1.innerHTML = "Level 10 ";
  Heading2.innerHTML = " The Lions";
  image.src = "PilgrimProgress/level10lions.png";
  question.innerHTML = "The shining ones were right, as you left them to continue your journey, you encounter many obstacles and deceptive people.  Finally, you come to a place where you hear lions roaring. You look inside, and there, before your eyes, are a den of lions. The porter of the lodge, whose name is Watchful, cries out, “fear not these lions , good fellow, for they are in chains. If you keep to the beam of light they cannot reach you.” You look forward at Watchful, who is almost a mile away from you. In the middle, is a straight beam of light that will guide you towards him. The lions look ferocious. Yes, they are chained up, but what if their chains break? What about this fellow: Watchful? Is he to be trusted?  What should you do? Pick an action.";
  answerOne.innerHTML = " Go back, this must have been a wrong turn--that is why you are here!";
  answerTwo.innerHTML = " Tell Watchful to follow the beam so he can come and meet you";
  answerThree.innerHTML = "Mope and cry ";
  AnswerFour.innerHTML = "Heed to Watchful’s instructions";
}
//go level 11
function goLevel11() {
  currentLevel = 11;
  Heading1.innerHTML = "Level 11";
  Heading2.innerHTML = "Equipped";
  image.src = "PilgrimProgress/level11.png";
  question.innerHTML = " You mighty man of valour, you were so brave walking through the lions’ den. You made it to Watchful. You are able to lodge at his place for the night. Whilst you are at his place, you are preparing for your battle with the beastly lord and principality: APPOLYON. Watchful and his attendants at the lodge equip you for tomorrow’s battle. You are given a helmet and a breast plate, as well as a shield to fend off the fiery darts, and a trusty sword for offensive attacks. Your feet are shod with invincible foot-wear.";
  answerOne.innerHTML = "Commence to battle";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 12
function goLevel12() {
  currentLevel = 12;
  Heading1.innerHTML = "Level 12";
  Heading2.innerHTML = "Battle with Appolyon ";
  image.src = " PilgrimProgress/level12.png";
  question.innerHTML = "You find yourself in the Valley of Humiliation. Then all of a sudden, darkness veils the sun; a towering monster appears—his name: APPOLYON. APPOLYON reveals to you that he is the reigning principality of the City of Destruction. Appalled by your decision to leave his city, he is enraged and wants to destroy you. He raises his monstrous long nails to stab you. What should you do?";
  answerOne.innerHTML = " Run away, this monster is too hideous and powerful to defeat";
  answerTwo.innerHTML = " Manoeuvre you way around him and get out of the valley of humiliation";
  answerThree.innerHTML = " Be strong and take action! Fight him!";
  AnswerFour.innerHTML = " Stand there and tremble in fear";
}
//go level 13
function goLevel13() {
  currentLevel = 13;
  Heading1.innerHTML = " Level 13";
  Heading2.innerHTML = " Victory";
  image.src = "PilgrimProgress/level12.png";
  question.innerHTML = "Rejoice not mine enemy, when I fall, I shall arise!”. After a very long and painful battle, you reach for your trusty sword and stab APPOLYON  in the chest. The crooked beast flies away defeated and in pain.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = "Continue Your journey ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 14
function goLevel14() {
  currentLevel = 14;
  Heading1.innerHTML = "Level 14 ";
  Heading2.innerHTML = "Tree of Life";
  image.src = " PilgrimProgress/level14.png";
  question.innerHTML = " You are directed by the invisible Lord of Creation  towards  a tree: the Tree of  Life. You put the leaves on your wounds, and they heal you.";
  answerOne.innerHTML = "Continue Your Journey ";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 15
function goLevel15() {
  currentLevel = 15;
  Heading1.innerHTML = " Level 15";
  Heading2.innerHTML = " The Valley of the Shadow of death";
  image.src = "PilgrimProgress/LEVEL15.png ";
  question.innerHTML = " You approach a very dark and pitiful valley: The valley of the Shadow of Death. The smell of rotting flesh permeates the atmosphere leaving you in shock and dismay.  You decide to go in. You see the gates and fire of hell burning brightly in the darkness beside the path.  The sound of doleful  voices infiltrate you soul  leaving you in fear. Do you go back? Please pick an action.";
  answerOne.innerHTML = "Go back, you are lost!";
  answerTwo.innerHTML = " Jump inside the fire of hell, there is no hope for you to cross the valley";
  answerThree.innerHTML = "Keep going, you are nearly there ";
  AnswerFour.innerHTML = "Cry for help!";
}
//go level 16 
function goLevel16() {
  currentLevel = 16;
  Heading1.innerHTML = " Level 16 ";
  Heading2.innerHTML = " The Valley of the Shadow of death";
  image.src = " PilgrimProgress/LEVEL15.png";
  question.innerHTML = " “As I walk through the valley of the shadow of death, I will fear no evil.” You finally made it through that awful valley! You are alive and well.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = "Continue Your Journey ";
}
//go level 17
function goLevel17() {
  currentLevel = 17;
  Heading1.innerHTML = "Level 17 ";
  Heading2.innerHTML = "Seeing Evangelist again ";
  image.src = " PilgrimProgress/LEVEL17.png";
  question.innerHTML = " So, you continue down the right path. Just ahead of you, you recognise your neighbour called Faithful, who also comes from the City of Destruction. You finally catch up with him.  All of a sudden Evangelist appears. He says to the both of you, “take heed, you will soon come to a town called Vanity, where you will have many enemies.” Evangelist said a bit more, but  I will not reveal the rest of his speech to you.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = "Continue Your Journey ";
}
//go level 18
function goLevel18() {
  currentLevel = 18;
  Heading1.innerHTML = " Level 18";
  Heading2.innerHTML = " Vanity Fair";
  image.src = " PilgrimProgress/LEVEL18.png";
  question.innerHTML = " You and Faithful go down to the town called Vanity. The people there are holding a Vanity fair.  You and Faithful appear to be very different from the people there as the two of you don’t seem to fit into the status quo of the town. The People are bewildered: they, therefore, label you and Faithful as lunatics. Because of this, the both of you are arrested and trialled. After weighing up libellous witness statements made against the both of you, the Judge has come to a decision. What do you think his decision will be?";
  answerOne.innerHTML = " He will sentence (you) Christian to death ";
  answerTwo.innerHTML = "He will sentence Faithful to Death";
  answerThree.innerHTML = "He will sentence (you) Christian and Faithful to death";
  AnswerFour.innerHTML = " He will set both (you) Christian and Faithful free";
}
//go level 19
function goLevel19() {
  currentLevel = 19;
  Heading1.innerHTML = "Level 19 ";
  Heading2.innerHTML = " Faithful is Killed";
  image.src = " PilgrimProgress/level19.png";
  question.innerHTML = " Unfortunately, your beloved friend Faithful was burned at the stake. Suddenly after his death, the clouds parted, and there stood chariots and horses accompanied by trumpets waiting to receive the deceased Faithful.  Out of nowhere, a good man called Hopeful comes along and hurries you out of the Town of vanity. You guys continue the journey together.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " Continue your Journey";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 20 
function goLevel20() {
  currentLevel = 20;
  Heading1.innerHTML = " Level 20";
  Heading2.innerHTML = "The Shortcut ";
  image.src = " PilgrimProgress/level20.png";
  question.innerHTML = "The road ahead of the two of you is very rough. Soon later, the two of you come across a shortcut. You contemplate whether you should take it. Should you go down the shortcut?";
  answerOne.innerHTML = " YES";
  answerTwo.innerHTML = " No";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 21
function goLevel21() {
  currentLevel = 21;
  Heading1.innerHTML = " Level 21 ";
  Heading2.innerHTML = " Dark Dungeon";
  image.src = " PilgrimProgress/level22.png";
  question.innerHTML = "Ok, so you decide to take the shortcut. You and Hopeful made a very terrible mistake. You were met by an enormous, debased giant called the Giant of Despair. “You are trespassing on my land,” uttered the giant. He grabs both you and Hopeful, and casts you into a dark dungeon. You and Hopeful stay in the dungeon for a few days and nights with little to no food. You, Christian, can hardly breathe, and at this point in time you want to give up and commit suicide. After all, Despair the giant has told you and Hopeful to kill yourselves--if you don’t, he will.    Should you commit suicide? Please click yes or no? ";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = "YES ";
  AnswerFour.innerHTML = "NO";
}

//go level 22
function goLevel22() {
  currentLevel = 22;
  Heading1.innerHTML = " Level 22";
  Heading2.innerHTML = " Your escape";
  image.src = " PilgrimProgress/level22.png";
  question.innerHTML = " Hopeful tells you to not lose hope. The both of you then decide to pray. Strangely enough, you reach inside your pocket and find a key. You try to open the door of the dungeon, and to your surprise, the key works. The two of you walk out of the dungeon, however, you are confronted with another impediment: you have to get through an iron gate. You try the key on the gate and it works! However, the Giant suddenly storms out of his abode near the dungeon! He is really out to get you and Hopeful now. But…the giant starts to twitch and make spontaneous fits—his limbs then begin to fail him.The both of you successfully escape.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " Continue Your Journey";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 23
function goLevel23() {
  currentLevel = 23;
  Heading1.innerHTML = " Level 23";
  Heading2.innerHTML = " Almost there";
  image.src = " PilgrimProgress/level23real.png";
  question.innerHTML = " The two of you resume your journey on the right path. You then come across some shepherds keeping their flocks. At. The top of the hill, you and Hopeful get a glimpse of the Celestial City.  The shepherds give you and Hopeful warning, “beware of the flatterer, and take heed of the enchanted ground.” The two of you then set off on your journey. You both arrive at a place where two paths meet. Then behold, a man dressed in white, resembling one of the Shining Ones, comes to you. He says, “you are close to heaven’s gate, where the Celestial City is. I am going there myself. Come, follow me!” Should you follow him. Please click yes or no?";
  answerOne.innerHTML = "YES ";
  answerTwo.innerHTML = "NO ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 24
function goLevel24() {
  currentLevel = 24;
  Heading1.innerHTML = " Level 24";
  Heading2.innerHTML = " Set Free";
  image.src = " PilgrimProgress/level24.png";
  question.innerHTML = " Oops the two of you decide to go with him. You notice that something is not right with the path you are going down; the Celestial city seems further away than it was before. All of a sudden, you find yourselves entangled in a net. The man in the white robe had deceived the both of you.  All of a sudden, a real Shining One appears to set you and Hopeful free. The both of you continue on your journey.";
  answerOne.innerHTML = "Continue Your Journey ";
  answerTwo.innerHTML = " ";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//go level 25 
function goLevel25() {
  currentLevel = 25;
  Heading1.innerHTML = "Level 25";
  Heading2.innerHTML = "Deep waters";
  image.src = "PilgrimProgress/ChristiaAndHopefulinsea.png";
  question.innerHTML = " You and Hopeful continue on the right path. You see the Celestial City way in front of you. However, to reach there, you have to cross a deep and dark river. It is a very fearful moment for you, Christian, as you don’t know how to swim. The water is so deep, you can drown!!! What do you do?";
  answerOne.innerHTML = "Go and look for a boat, don’t swim across the deep river ";
  answerTwo.innerHTML = " Pray that one of the shining ones come and fly you away to the city";
  answerThree.innerHTML = "Attempt to swim and risk dying.";
  AnswerFour.innerHTML = " Go back and find a dry path to get to the celestial city.";
}
//go level 26
function goLevel26() {
  currentLevel = 26;
  Heading1.innerHTML = " Level 26 ";
  Heading2.innerHTML = "Deep waters";
  image.src = "PilgrimProgress/ChristiaAndHopefulinsea.png";
  question.innerHTML = " You decide to risk it all, Christian. You and Hopeful will swim across the deep and dark river. You are scared and shivering—almost close to drowning. You cry out, “Hopeful, the waves want to swallow me, help me.” Hopeful responds, “ Keep your head up!” The river is so deep that you begin to sink. Then, gradually, the water starts to subside, the ground starts to become firmer on the foot.You slowly approach the Celestial city.";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " GO INTO THE CITY";
  answerThree.innerHTML = " ";
  AnswerFour.innerHTML = " ";
}
//Celestial City 
function goLevel27() {
  currentLevel = 26;
  Heading1.innerHTML = " The Celestial City";
  Heading2.innerHTML = " ";
  image.src = " PilgrimProgress/celestial city.png";
  question.innerHTML = " Well done, You and Hopeful have finally reached the celestial city! You are greeted by many shinning ones with trumpets. Tey are singing and Dancing";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = "Recieve Your crown";
  answerThree.remove = " ";
  AnswerFour.remove = " ";
}
function Crown() {
  currentLevel = 27;
  Heading1.innerHTML = "The CROWN OF LIFE";
  Heading2.innerHTML = " Your score is ";
  image.src = "PilgrimProgress/crownOfLife.png";
  question.innerHTML = " FOREVER YOU LIVE IN THE CELESTIAL CITY";
  answerOne.innerHTML = " ";
  answerTwo.innerHTML = " Recieve Your Crown";
  answerThree.remove = " ";
  AnswerFour.remove = " ";
}
// if the current level (number) then the player has to click on the right button (number) which corresposnds to any of the answers, they go onto the next level. Score will increment or decrement depening on whether the right button is clicked or not. Prompt message will also show depending on whether or not the right button is clicked. a function is called when the player clicks on the write button that changes th elook of the html page.
function clickButton(button) {

  if (currentLevel == 1) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel2();
      currentScore += 5;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 3;
      promptMessage.innerHTML = "wrong decision!";
    }
  } else if (currentLevel == 2) {
    var correctButton = 4;
    if (button == correctButton) {
      goLevel3()
      currentScore += 5;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 2;
      promptMessage.innerHTML = "NO!";
    }
  }
  else if (currentLevel == 3) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel4()
      currentScore += 5;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 3
      promptMessage.innerHTML = "Click on the right answer";
    }
  }
  //level 4
  else if (currentLevel == 4) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel5()
      currentScore += 5;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 10;
      promptMessage.innerHTML = " Wrong decision!";
    }
  }
  //level 5
  else if (currentLevel == 5) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel6()
      currentScore += 3;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 2
      promptMessage.innerHTML = "No!";
    }
  }
  //level6
  else if (currentLevel == 6) {
    var correctButton = 3;
    if (button == correctButton) {
      goLevel7()
      currentScore += 2;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "Please click on the right button";
    }
  }
  //level 7
  else if (currentLevel == 7) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel8()
      currentScore += 2;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "Please click on the right button";
    }
  }
  //level 8
  else if (currentLevel == 8) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel9()
      currentScore += 7;
      promptMessage.innerHTML = " ";
    } else {
      currentScore = -5;
      promptMessage.innerHTML = "Argh, how could you think that?";
    }
  }
  //Level 9
  else if (currentLevel == 9) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel10()
      currentScore += 0;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = " Please click on the right button!";
    }
  }
  //Level 10
  else if (currentLevel == 10) {
    var correctButton = 4;
    if (button == correctButton) {
      goLevel11()
      currentScore += 7;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = " Nope";
    }
  }
  //Level 11
  else if (currentLevel == 11) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel12()
      currentScore += 0;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "Go to  battle...";
    }
  }
  //level 12
  else if (currentLevel == 12) {
    var correctButton = 3;
    if (button == correctButton) {
      goLevel13()
      currentScore += 10;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 5;
      promptMessage.innerHTML = "Go and fight!"
    }
  }
  //level 13
  else if (currentLevel == 13) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel14()
      currentScore += 3;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = " Click on the right button..."
    }
  }
  //level 14
  else if (currentLevel == 14) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel15()
      currentScore += 0;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "Persist...";
    }
  }
  //level 15
  else if (currentLevel == 15) {
    var correctButton = 4;
    if (button == correctButton) {
      goLevel16()
      currentScore += 5;
      promptMessage = " ";
    } else {
      currentScore -= 2;
      promptMessage.innerHTML = "Wrong answer";
    }
  }
  //level 16
  else if (currentLevel == 16) {
    var correctButton = 4;
    if (button == correctButton) {
      goLevel17()
      currentScore += 0;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "Click on the right button";
    }
  }
  //level 17
  else if (currentLevel == 17) {
    var correctButton = 4;
    if (button == correctButton) {
      goLevel18()
      currentScore += 2;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "Click on the right button...";
    }
  }
  //level 18
  else if (currentLevel == 18) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel19()
      currentScore += 2;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 1;
      promptMessage.innerHTML = "NO";
    }
  }
  //level 19
  else if (currentLevel == 19) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel20()
      currentScore += 1;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = " Click on the right button, please."
    }
  }
  //level 20
  else if (currentLevel == 20) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel21()
      currentScore += 4;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 2;
      promptMessage.innerHTML = "You are wrong..."
    }
  }
  //levl 21
  else if (currentLevel == 21) {
    var correctButton = 4;
    if (button == correctButton) {
      goLevel22()
      currentScore += 4;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 10;
      promptMessage.innerHTML = "Why would you want to kill yourself?";
    }
  }
  //level 22
  else if (currentLevel == 22) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel23()
      currentScore += 4;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "Click on the right button, please....";
    }
  }
  //level 23
  else if (currentLevel == 23) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel24()
      currentScore += 5;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 2;
      promptMessage.innerHTML = "NO, you should not";
    }
  }
  //level 24
  else if (currentLevel == 24) {
    var correctButton = 1;
    if (button == correctButton) {
      goLevel25()
      currentScore += 5;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 2;
      promptMessage.innerHTML = "This is not the right button";
    }
  }
  //level 25
  else if (currentLevel == 25) {
    var correctButton = 3;
    if (button == correctButton) {
      goLevel26()
      currentScore += 10;
      promptMessage.innerHTML = " ";
    } else {
      currentScore -= 6;
      promptMessage.innerHTML = "Psst, risk it..";
    }
  }
  //level 26
  else if (currentLevel == 26) {
    var correctButton = 2;
    if (button == correctButton) {
      goLevel27()
      currentScore += 10;
      promptMessage.innerHTML = " ";
    } else {
      promptMessage.innerHTML = "You are nearly there!"
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




