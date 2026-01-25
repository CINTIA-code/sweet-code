const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.volume = 0.6;
    music.play();
    btn.textContent = "⏸️";
  } else {
    music.pause();
    btn.textContent = "▶️";
  }
  playing = !playing;
});

// Corações subindo
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 12 + "px";
  heart.style.animationDuration = Math.random() * 3 + 6 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 700);