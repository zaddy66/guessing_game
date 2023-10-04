let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Generating Target for each round
const generateTarget = () => {
  let random = Math.floor(Math.random() * 10);
  return random;
};

//Get absolute Distance
const getAbsoluteDistance = (x, y) => {
  let numC = x - y;
  if (numC < 0) {
    return (numC *= -1);
  } else {
    return numC;
  }
};

//compare Guesses
const compareGuesses = (human, computer, generateTarget) => {

   //This is #8 step
   if(getAbsoluteDistance(human, generateTarget) <= getAbsoluteDistance(computer, generateTarget) ) {
      return true;
   } else {
      false;
   }
   /*
   //this is 3rd or 4th step
  if (Math.abs(human - generateTarget) > Math.abs(computer - generateTarget)) {
    return false;
  } else if (
    Math.abs(human - generateTarget) === Math.abs(computer - generateTarget)
  ) {
    return true;
  } else {
    return true;
  } */
};

//updating the score
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

//advanced round
const advanceRound = () => {
  currentRoundNumber++;
};
