let selectedMood = "";
let moodHistory = [];

function selectMood(mood) {
  selectedMood = mood;

  let buttons = document.querySelectorAll(".moods button");
  buttons.forEach(btn => btn.classList.remove("selected"));

  event.target.classList.add("selected");
}

function saveMood() {
  if (selectedMood === "") {
    alert("Please select a mood first!");
    return;
  }

  let message = "";
  let musicLink = "";

  if (selectedMood === "happy") {
    message = "You're glowing today! Keep spreading positivity 😊";
    musicLink = "https://www.youtube.com/embed/ZbZSe6N_BXs";
  } 
  else if (selectedMood === "sad") {
    message = "It's okay to feel sad. Music can heal 💙";
    musicLink = "https://www.youtube.com/embed/k4V3Mo61fJM";
  } 
  else if (selectedMood === "angry") {
    message = "Take a deep breath. Let the music release the stress 🔥";
    musicLink = "https://www.youtube.com/embed/7wtfhZwyrcc";
  } 
  else if (selectedMood === "anxious") {
    message = "Slow down. Everything will be okay 🌿";
    musicLink = "https://www.youtube.com/embed/2OEL4P1Rz04";
  }

  document.getElementById("response").innerText = message;

  document.getElementById("music").innerHTML = `
    <iframe width="100%" height="200"
      src="${musicLink}"
      frameborder="0"
      allowfullscreen>
    </iframe>
  `;

  moodHistory.push(selectedMood);
  document.getElementById("history").innerText =
    "Mood History: " + moodHistory.join(", ");
}