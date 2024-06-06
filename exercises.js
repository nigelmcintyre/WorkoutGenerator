const exercises = {
  chest: {
    compound: ["Bench Press", "Push-Ups", "Dumbbell Press"],
    isolation: ["Dumbbell Flyes", "Cable Crossovers"],
  },
  back: {
    compound: ["Deadlifts", "Pull-Ups", "Bent-Over Rows"],
    isolation: ["Dumbbell Rows", "Lat Pulldowns"],
  },
  shoulders: {
    compound: ["Military Press", "Dumbbell Shoulder Press"],
    isolation: ["Lateral Raises", "Front Raises"],
  },
  legs: {
    compound: ["Squats", "Lunges", "Deadlifts"],
    isolation: ["Leg Extensions", "Leg Curls", "Calf Raises"],
  },
  biceps: {
    isolation: ["Dumbbell Curls", "Preacher Curls", "Barbell Curls"],
  },
  triceps: {
    isolation: [
      "Tricep Pushdowns",
      "Skull Crushers",
      "Overhead Tricep extensions",
    ],
  },
  abdominals: [
    "Hanging Leg Raises",
    "Cable Crunches",
    "Sit-Ups",
    "Russian Twists",
  ],
  glutes: {
    compound: ["Squats", "Deadlifts", "Lunges"],
    isolation: ["Glute Bridges", "Hip Thrusts"],
  },
  hamstrings: {
    compound: ["Deadlifts", "Lunges", "Romanian Deadlifts"],
    isolation: ["Leg Curls", "Good Mornings"],
  },
  calves: {
    compound: ["Standing Calf Raises"],
    isolation: ["Seated Calf Raises", "Calf Raises on Leg Press Machine"],
  },
};

module.exports = exercises;
