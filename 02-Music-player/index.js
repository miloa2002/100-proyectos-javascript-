let player = document.querySelector(".player");
let play = player.querySelector(".play");
let forward = player.querySelector(".forward");
let backward = player.querySelector(".backward");
let progress = player.querySelector(".progress-bar span");
let progressBar = player.querySelector(".input-progress");

let currentSong = 0;
let isPlaying = false;
let audio = new Audio();

let musicPlayer = [
  {
    name: "Faded",
    artist: "Alan Walker",
    imageUrl: "./images/faded.png",
    songUrl: "./music/Faded.mp3",
  },
  {
    name: "Fallingdown",
    artist: "K-391",
    imageUrl: "./images/fallingdown.jpg",
    songUrl: "./music/fallingdown.mp3",
  },
  {
    name: "Rather Be",
    artist: "Clean Bandit",
    imageUrl: "./images/ratherbe.jpg",
    songUrl: "./music/Rather Be.mp3",
  },
  {
    name: "stay",
    artist: "The KidLAROI, Justin Bieber",
    imageUrl: "./images/stay.png",
    songUrl: "./music/stay.mp3",
  },
];

document.addEventListener("DOMContentLoaded", loadMusic);

audio.addEventListener("timeupdate", () => {
  let timeRemaining = audio.duration - audio.currentTime;

  let minutes = Math.floor(timeRemaining / 60);
  let secondsLeft = Math.floor(timeRemaining % 60);
  progress.textContent = `${minutes}: ${secondsLeft}`;

  let progressBar = player.querySelector(".input-progress");
  progressBar.value = audio.currentTime;
});

play.addEventListener("click", playSong);
forward.addEventListener("click", nextSong);
backward.addEventListener("click", backSong);

function loadMusic() {
  let song = musicPlayer[currentSong];
  player.querySelector(".track-name").textContent = song.name;
  player.querySelector(".track-artist").textContent = song.artist;
  player.querySelector(".cover-image").src = song.imageUrl;
}

function playSong() {
  if (!isPlaying) {
    audio.src = musicPlayer[currentSong].songUrl;
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
}

function nextSong() {
  musicPlayer[currentSong++];
  if (currentSong >= musicPlayer.length) {
    musicPlayer[(currentSong = 0)];
  }
  loadMusic();
}

function backSong() {
  if (currentSong === 0) {
    currentSong = musicPlayer.length - 1;
  } else {
    currentSong--;
  }
  loadMusic();
}
