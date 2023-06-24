document.addEventListener('DOMContentLoaded', function() {
  const beginnerButton = document.getElementById('beginnerButton');
  const intermediateButton = document.getElementById('intermediateButton');
  const advancedButton = document.getElementById('advancedButton');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const workoutRoutineElement = document.getElementById('workoutRoutine');

  const beginnerWorkouts = [
    { name: 'Push Up Plank Hold', sets: 2, reps: 15, description: 'Hold a push-up position with your body straight for 15 seconds.' },
    { name: 'Crunches', sets: 2, reps: 10, description: 'Lie on your back and lift your shoulders off the floor.' },
    { name: 'Leg Raises', sets: 2, reps: 8, description: 'Lie on your back and lift your legs up towards the ceiling.' },
    { name: 'Russian Twists', sets: 2, reps: 10, description: 'Sit on the floor and twist your torso from side to side.' },
    { name: 'Mountain Climbers', sets: 2, reps: 10, description: 'Assume a push-up position and alternate bringing your knees to your chest.' },
    { name: 'Side Planks', sets: 2, reps: 15, description: 'Hold a side-plank for 15 seconds. One set per side.' }
  ];

  const intermediateWorkouts = [
    { name: 'Bicycle Crunches', sets: 3, reps: 15, description: 'Lie on your back and perform a bicycle pedaling motion with your legs.' },
    { name: 'Heel Touches', sets: 3, reps: 12, description: 'Lie on your back and touch your heels with your fingertips, alternating sides.' },
    { name: 'Seated Russian Twists', sets: 3, reps: 12, description: 'Sit on the floor with your knees bent, twist your torso from side to side while holding a weight.' },
    { name: 'Reverse Crunches', sets: 3, reps: 10, description: 'Lie on your back and bring your knees towards your chest, lifting your hips off the floor.' },
    { name: 'Plank with Shoulder Taps', sets: 3, reps: 12, description: 'Assume a push-up position and tap your shoulders with your opposite hands.' },
    { name: 'V-ups', sets: 3, reps: 12, description: 'Lie on your back and lift your legs and upper body simultaneously, forming a "V" shape.' },
    { name: 'Hanging Leg Raises', sets: 3, reps: 10, description: 'Hang from a pull-up bar and lift your legs straight up towards your chest.' },
    { name: 'Flutter Kicks', sets: 3, reps: 15, description: 'Lie on your back and kick your legs up and down without touching the ground.' },
    ...beginnerWorkouts, // Include beginner workouts
    { name: 'Plank', sets: 1, reps: 45, description: 'Hold a plank with your body straight for 45 seconds.' },
  ];

  const advancedWorkouts = [
    { name: 'Spiderman Plank', sets: 4, reps: 12, description: 'Assume a plank position and bring your knee towards your elbow, alternating sides.' },
    { name: 'Lying Leg Raises', sets: 4, reps: 10, description: 'Lie on your back and lift your legs up towards the ceiling, keeping them straight.' },
    { name: 'Scissor Kicks', sets: 4, reps: 15, description: 'Lie on your back and perform scissor-like motions with your legs, alternating them up and down.' },
    { name: 'Oblique Crunches', sets: 4, reps: 12, description: 'Lie on your back and twist your torso, bringing your elbow to the opposite knee.' },
    { name: 'Plank Jacks', sets: 4, reps: 10, description: 'Assume a plank position and jump both feet wide, then back together.' },
    // { name: 'Toes to Bar', sets: 4, reps: 8, description: 'Hang from a pull-up bar and lift your legs up, touching your toes to the bar.' },
    // { name: 'Dragon Flags', sets: 4, reps: 6, description: 'Lie on a bench and raise your body straight up, keeping it aligned and controlled.' },
    { name: 'Windshield Wipers', sets: 4, reps: 10, description: 'Lie on your back with your legs extended and rotate them from side to side, touching the floor.' },
    // { name: 'Standing Cable Crunches', sets: 4, reps: 12, description: 'Attach a cable to a high pulley and crunch your upper body down, engaging your abs.' },
    { name: 'Side Jackknives', sets: 4, reps: 10, description: 'Lie on your side, supporting yourself on your forearm, and lift your torso and legs, bringing them together.' },
    // { name: 'Standing Oblique Twists', sets: 4, reps: 15, description: 'Stand with your feet shoulder-width apart, hold a weight in your hands, and twist your torso from side to side.' },
    // { name: 'Dragon Curls', sets: 4, reps: 8, description: 'Lie on your back on a bench and curl your upper body, lifting your hips off the bench.' },
    { name: 'Hanging Windshield Wipers', sets: 4, reps: 6, description: 'Hang from a pull-up bar and rotate your legs from side to side, touching the bar.' },
    // { name: 'Cable Woodchoppers', sets: 4, reps: 12, description: 'Attach a cable to a high pulley and perform diagonal chops, engaging your core.' },
    ...intermediateWorkouts, // Include intermediate workouts
    { name: 'Plank', sets: 1, reps: 60, description: 'Hold a regular plank with your body straight for one minute.' }
  ];

  beginnerButton.addEventListener('click', function() {
    generateRoutine(beginnerWorkouts, 'Beginner');
  });

  intermediateButton.addEventListener('click', function() {
    generateRoutine(intermediateWorkouts, 'Intermediate');
  });

  advancedButton.addEventListener('click', function() {
    generateRoutine(advancedWorkouts, 'Advanced');
  });

  function generateRoutine(workouts, difficulty) {
    workoutRoutineElement.innerHTML = '';

    const selectedWorkouts = getRandomElements(workouts, 5);

    if (selectedWorkouts.length > 0) {
      const headerElement = document.createElement('h2');
      headerElement.textContent = `${difficulty} Workout`;
      workoutRoutineElement.appendChild(headerElement);

      selectedWorkouts.forEach((workout) => {
        const workoutElement = createWorkoutElement(workout);
        workoutRoutineElement.appendChild(workoutElement);
      });
    }
  }

  function createWorkoutElement(workout) {
    const workoutElement = document.createElement('div');
    workoutElement.classList.add('workout');

    const nameElement = document.createElement('h3');
    nameElement.textContent = workout.name;
    workoutElement.appendChild(nameElement);

    const setsElement = document.createElement('p');
    setsElement.textContent = `Sets: ${workout.sets}`;
    workoutElement.appendChild(setsElement);

    const repsElement = document.createElement('p');
    repsElement.textContent = `Reps: ${workout.reps}`;
    workoutElement.appendChild(repsElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = workout.description;
    workoutElement.appendChild(descriptionElement);

    return workoutElement;
  }

  function getRandomElements(array, numElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
  }
});
