const player = document.querySelector('.player');
const video = player.querySelector('.player__video');

const playButton = player.querySelector('.player__button');
const playSliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('button[data-skip]');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

function togglePlay() {
  if(video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}

function updateButton() {
  const PAUSE = '❚ ❚';
  const PLAY = '►';
  
  if(video.paused) {
    playButton.textContent = PLAY;
  }
  else {
    playButton.textContent = PAUSE;
  }
}

function skipPlayback(button) {
  video.currentTime += Number(button.dataset['skip']);
}

function updateSlider(slider) {
  video[slider.name] = slider.value;
}

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

playSliders.forEach(slider => slider.addEventListener('click', () => updateSlider(slider)));

skipButtons.forEach(button => button.addEventListener('click', () => skipPlayback(button)));

