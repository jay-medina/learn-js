const player = document.querySelector('.player');
const video = player.querySelector('.player__video');

const playButton = player.querySelector('.player__button');
const playSliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('button[data-skip]');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

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
  video.currentTime += Number(button.dataset.skip);
}

function updateSlider(slider) {
  video[slider.name] = slider.value;
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function progressbarClick(e) {
  const width = progress.offsetWidth;
  const posX = e.offsetX;
  const percent = (posX / width);
  video.currentTime = video.duration * percent;
}

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

playSliders.forEach(slider => slider.addEventListener('click', () => updateSlider(slider)));

skipButtons.forEach(button => button.addEventListener('click', () => skipPlayback(button)));

progress.addEventListener('click', progressbarClick);

video.addEventListener('timeupdate', updateProgress);