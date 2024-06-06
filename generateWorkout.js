const exercises = require("./exercises");

const workout = {
  compoundExercises: [],
  isolationExercises: [],
};
const generatePPLWorkout = (workoutType) => {
  switch (workoutType) {
    case "Push":
    case "Pull":
    case "Legs":
  }

  return workout;
};

const generateCSLWorkout = (workoutType) => {
  switch (workoutType) {
    case "Chest/Back":
      workout.compoundExercises.push(
        selectRandomExercises("chest", "compound",workout)
      );
      workout.compoundExercises.push(selectRandomExercises("back", "compound",workout));
      workout.isolationExercises.push(
        selectRandomExercises("chest", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("back", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("chest", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("back", "isolation",workout)
      );
    case "Shoulders/Arms":
      workout.compoundExercises.push(
        selectRandomExercises("shoulders", "compound",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("shoulders", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("shoulders", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("biceps", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("triceps", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("biceps", "isolation",workout)
      );
      workout.isolationExercises.push(
        selectRandomExercises("triceps", "isolation",workout)
      );
    case "Legs":
  }
  return workout;
};
// Function to randomly select exercises
function selectRandomExercises(muscleGroup, exerciseType, workout) {
  const randomIndex = Math.floor(
    Math.random() * exercises[muscleGroup][exerciseType].length
  );
  let exercise = exercises[muscleGroup][exerciseType][randomIndex];
  return exercise;
}

const exerxiseAlreadyExists = (exercise,muscleGroup, exerciseType,workout) => {
  if(workout.)
}

module.exports = { generatePPLWorkout, generateCSLWorkout };
