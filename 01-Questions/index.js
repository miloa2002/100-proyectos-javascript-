const countdown = document.getElementById("countdown");
const endAudio = document.getElementById("endAudio");
const retryBtn = document.getElementById("retryBtn");
const submitBtn = document.getElementById("submitBtn");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");

let time = 30;
let interval;

document.addEventListener("DOMContentLoaded", startQuiz);
retryBtn.addEventListener("click", () => {
  startQuiz();
});
submitBtn.addEventListener("click", () => {
  let fecha = new Date().toLocaleDateString("es-ES");
  alert(
    fecha +
      " " +
      answer1.value +
      " " +
      answer2.value +
      " " +
      answer3.value +
      " " +
      answer4.value +
      " " +
      answer5.value
  );
  clearInterval(interval);
});

function startQuiz() {
  interval = setInterval(chronometer, 1000);
}

function chronometer() {
  time--;
  countdown.textContent = time;
  if (time <= 0) {
    endAudio.play();
    alert("GAME OVER vuelve a intentarlo");
    clearInterval(interval);
    time = 30;
    return;
  }
}
