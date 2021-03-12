const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

let current_key = "k";
let current_score = 0;

function initializeGame() {
  document.addEventListener("keydown", checkKeyPress);
}

function checkKeyPress(e) {
  let does_key_match = current_key === e.key;
  if (does_key_match) {
    current_score++;
  }
  updateScoreDisplay();
  clearKeyState();
  updateKeyState(does_key_match);
  updateNextKey();
}

function updateKeyState(is_match) {
  const key = document.getElementById("key-display");
  key.classList.add(is_match ? "right" : "wrong");
}

function clearKeyState() {
  const key = document.getElementById("key-display");
  const states = ["normal", "right", "wrong"];
  states.forEach((i) => {
    if (key.classList.contains(i)) {
      key.classList.remove(i);
    }
  });
}

function updateNextKey() {
  current_key = generateNextKey();
  const key = document.getElementById("key-display");
  key.textContent = current_key.toLocaleUpperCase();
  setTimeout(() => {
    clearKeyState();
    key.classList.add("normal");
  }, 300);
}

function updateScoreDisplay() {
  document.getElementById("score").value = current_score;
}

function generateNextKey() {
  return keys[Math.floor(Math.random() * keys.length)];
}

export default initializeGame;
