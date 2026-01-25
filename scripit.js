let player;
let playing = false;

// YouTube API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('music');
}

// Carrega API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// Botão play/pause
const btn = document.getElementById("musicBtn");
btn.addEventListener("click", () => {
  if (!playing) {
    player.playVideo();
    btn.textContent = "⏸️ Iris";
  } else {
    player.pauseVideo();
    btn.textContent = "▶️ Iris";
  }
  playing = !playing;
});

// Corações
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 600);