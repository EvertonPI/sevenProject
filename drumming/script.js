document.addEventListener("keypress", e => {
  playSound(e.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  const song = document.querySelector("#input").value;
  const songArray = song.split("");
  if (songArray !== "") composition(songArray);
});

const playSound = sound => {
  const audioElement = document.querySelector(`#s_${sound}`);
  const keyElement = document.querySelector(`div[data-key=${sound}]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.toggle("active");
    setTimeout(() => {
      keyElement.classList.toggle("active");
    }, 400);
  }
};

const composition = songArray => {
  let test = 0;
  for (const songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, test);
    test += 300;
  }
};
