const exercises = require("./exercises");
const readline = require("readline");
const { generateCSLWorkout, generatePPLWorkout } = require("./generateWorkout");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runApplication() {
  // Prompt user for workout split selection
  rl.question(
    "Would you like to choose 1. Push, Pull, Legs split or 2. Chest/Back, Shoulders/Arms, Legs split? ",
    (option) => {
      if (option === "0") {
        rl.close();
        return; // End the application
      }
      switch (option) {
        case "1":
          rl.question(
            "Would you like to choose Push, Pull or Legs? ",
            (muscleGroup) => {
              generatePPLWorkout(muscleGroup);
              console.log(
                `You chose option Push, Pull, Legs split: ${muscleGroup}.`
              );
              rl.close();
            }
          );
          break;
        case "2":
          rl.question(
            "Would you like to choose Chest/Back, Shoulders/Arms or Legs? ",
            (muscleGroup) => {
              console.log(generateCSLWorkout(muscleGroup));
              console.log(
                `You chose option Chest/Back, Shoulders/Arms, Legs split: ${muscleGroup}.`
              );
              rl.close();
            }
          );
          break;
        default:
          console.log("Invalid option. Please choose either 1 or 2.");
          rl.close();
      }
    }
  );
}

runApplication();
