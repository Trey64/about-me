"use strict";

var user = prompt("Hi there, what's your name?");
console.log("User's name is " + user);

var wantToPlay = prompt("Nice to meet you, " + user + "! Would you like to play a game? (Type \'yes\' or \'no\')").toLowerCase();

while (wantToPlay !== "y" && wantToPlay !== "yes" && wantToPlay !== "n" && wantToPlay !== "no") {
  wantToPlay = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
}

if (wantToPlay === "n" || wantToPlay === "no") {
  alert("Aww, that's too bad. Maybe next time!");
} else {
  alert("Great! Let's get started then!");

  var numCorrect = 0;

  // Question 1

  var haveSiblings = prompt("Question 1: Am I an only child?").toLowerCase();

  console.log("User response to question 1 is " + haveSiblings + " (initial input)");

  while (haveSiblings !== "y" && haveSiblings !== "yes" && haveSiblings !== "n" && haveSiblings !== "no") {
    haveSiblings = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
  }

  console.log("User response to question 1 is now " + haveSiblings + " (corrected, if needed)");
        // should always be "y, yes, n, or no" after the while loop

  if (haveSiblings === "y" || haveSiblings === "yes") {
    numCorrect++;
    alert("Right! I have one older brother and one younger sister. You've gotten " + numCorrect + " question correct so far.");
  } else {
    alert("Nope! I have one older brother and one younger sister. You've gotten " + numCorrect + " questions correct so far.");
  }

  // Question 2

  var canDrive = prompt("Question 2: Do I have a driver's license?").toLowerCase();

  console.log("User response to question 1 is " + canDrive + " (initial input)");

  while (canDrive !== "y" && canDrive !== "yes" && canDrive !== "n" && canDrive !== "no") {
    canDrive = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
  }

  console.log("User response to question 1 is now " + canDrive + " (corrected, if needed)");

  if (canDrive === "y" || canDrive === "yes") {
    numCorrect++;
    alert("That's right! I got a 90/100 on my driving test (trying to parallel park in a Eurovan sucks). You've gotten " + numCorrect + " question(s) correct so far.");
  } else {
    alert("No, that's wrong. You've gotten " + numCorrect + " question(s) correct so far.");
  }

  // Question 3

  var brokenBones = prompt("Question 3: Have I broken any bones?").toLowerCase();

  console.log("User response to question 1 is " + brokenBones + " (initial input)");

  while (brokenBones !== "y" && brokenBones !== "yes" && brokenBones !== "n" && brokenBones !== "no") {
    brokenBones = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
  }

  console.log("User response to question 1 is now " + brokenBones + " (corrected, if needed)");

  if (brokenBones === "y" || brokenBones === "yes") {
    numCorrect++;
    alert("Correct. I broke my right ulna when I was 7. You've gotten " + numCorrect + " question(s) correct so far.");
  } else {
    alert("Wrong. I broke my right ulna when I was 7. You've gotten " + numCorrect + " question(s) correct so far.");
  }

  // Question 4

  var playInstrument = prompt("Question 4: Do I play any instruments?").toLowerCase();

  console.log("User response to question 1 is " + playInstrument + " (initial input)");

  while (playInstrument !== "y" && playInstrument !== "yes" && playInstrument !== "n" && playInstrument !== "no") {
    playInstrument = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
  }

  console.log("User response to question 1 is now " + playInstrument + " (corrected, if needed)");

  if (playInstrument === "y" || playInstrument === "yes") {
    alert("Wrong. Unfortunately, I do not play any instruments. You've gotten " + numCorrect + " question(s) correct so far.");
  } else {
    numCorrect++;
    alert("Right. Unfortunately, I do not play any instruments. You've gotten " + numCorrect + " question(s) correct so far.");
  }

  // Question 5

  var havePets = prompt("Question 5: Do I have any pets?").toLowerCase();

  console.log("User response to question 1 is " + havePets + " (initial input)");

  while (havePets !== "y" && havePets !== "yes" && havePets !== "n" && havePets !== "no") {
    havePets = prompt("I'm sorry, I don't understand. Please type \'yes\' or \'no\'").toLowerCase();
  }

  console.log("User response to question 1 is now " + havePets + " (corrected, if needed)");

  if (havePets === "y" || havePets === "yes") {
    alert("No, but maybe someday. You got " + numCorrect + " question(s) correct.");
  } else {
    numCorrect++;
    alert("Correct. I don't have any pets right now, maybe someday. You've gotten " + numCorrect + " question(s) correct so far.");
  }

  // Question 6
  var guessedNum = parseInt(prompt("Question 6: What is my favorite number? Hint: It's between 1 and 20. You have 4 tries"));

  while(guessedNum === NaN) {
    guessedNum = parseInt(prompt("Yo, that's not a number! Please enter a number.");
  }

  var triesRemaining = 4;

  while (triesRemaining > 0) {
    if (guessedNum < 1 || guessedNum > 20) {
      triesRemaining--;
      guessedNum = parseInt(prompt("No, remember it's between 1 and 20. You have " + triesRemaining + " guess(es) left."));
    } else if (guessedNum > 13) {
      triesRemaining--;
      guessedNum = parseInt(prompt("Try lower. You have " + triesRemaining + " guess(es) left."));
    } else if (guessedNum < 13) {
      triesRemaining--;
      guessedNum = parseInt(prompt("Try higher. You have " + triesRemaining + "guess(es) left."));
    } else if (guessedNum === 13) {
      triesRemaining = 0;
      numCorrect++;
      alert("That's right! I was born on the 13th. You've gotten " + numCorrect + " question(s) correct so far.");
    }

  }

  // Question 7
  var sports = ["basketball", "boxing", "soccer", "tennis"];
  var sportsGuess = prompt("Last question: I love watching sports. Can you guess one of my favorites?").toLowerCase();

  var sportGuessesLeft = 6;

  while (sportGuessesLeft > 0) {
    if (sports.indexOf(sportsGuess) === -1) {
      sportGuessesLeft--
      sportsGuess = prompt("Nope, that's not one of them. You have " + sportGuessesLeft + "guess(es) left.").toLowerCase();
    } else {
      sportGuessesLeft = 0;
      numCorrect++;
      alert("Yep correct! My favorite sports are basketball, boxing, soccer, and tennis");
    }
  }

  // End of game message
  if (numCorrect === 0) {
    alert("You got 0 questions correct, " + user + ". Better luck next time!");
  } else {
    alert("Good job " + user + " you got " + numCorrect + " out of 7 question(s) correct!");
  }
}
