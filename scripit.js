const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸️";
  } else {
    music.pause();
    musicBtn.textContent = "🎵";
  }
  playing = !playing;
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);