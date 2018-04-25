alert("Dare to challenge the computer to Rock Paper Scissors?"); //Opening screen for the player to see

var playerChoice = prompt("Pick your move: (r)ock (p)aper or (s)cissors");

var cpuChoice = Math.random(); //A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

//Using math.random, dividing the range of values by 3 and assigning them to the three options to allow the CPU to pick and play

  if (cpuChoice < 0.34){
          cpuChoice = "rock";
        } else if (cpuChoice <= 0.67) {
          cpuChoice = "paper";

//if and else if statements to help assign the 3 values to each option of rock, paper and scissors

        }
        else {
        cpuChoice = "scissors";
      }

       console.log("Computer chooses: " + cpuChoice); // prints the computers choice

//declaring the variable compare as a function using the players choice and cpu's choice as 1 and 2

        var compare = function(choice1,choice2){
            if(choice1===choice2){
                return "The result is a tie!" + " " + " Rematch?" ;
            }
            // the === is a strict equal operator which compares the two inputs to return a boolean result which counts as the winner
            else if (choice1 === "rock") {

          if (choice2 === "scissors") {
              return "rock wins" + " " + "Player wins, well done!";
          }
          else {
              return "paper wins" + " " + "CPU won this one, better luck next time";
          }
      }

      else if (choice1 === "paper") {

          if (choice2 === "rock") {
              return "paper wins" + " " + "Player wins, well done!";
          }
          else {
              return "scissors wins" + " " + "CPU won this one, better luck next time";
          }

      }

      else if (choice1 === "scissors") {

          if (choice2 === "rock") {
              return "rock wins" + " " + "CPU won this one, better luck next time";
          }
          else {
              return "scissors win" + " " + "Player wins, well done!";
          }
      }
    }

console.log(compare(playerChoice,cpuChoice)); // prints the result of the compare function of the two choices
