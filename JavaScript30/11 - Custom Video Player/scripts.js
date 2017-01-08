const player = document.querySelector('.player');
const video = player.querySelector('.player__video');

const playButton = player.querySelector('.player__button');
const volume = player.querySelector('input[name="volume"]');
const playbackRate = player.querySelector('input[name="playbackRate"]');
const skipButtons = player.querySelectorAll('button[data-skip]');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

video.volume = volume.value;
video.playbackRate = playbackRate.value;

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

function skipPlayback(e, button) {
  video.currentTime += Number(button.dataset['skip']);
}

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

volume.addEventListener('change', function(e) {
  video.volume = volume.value;
});

playbackRate.addEventListener('change', function() {
  video.playbackRate = playbackRate.value;
});

skipButtons.forEach(button => button.addEventListener('click', (e) => skipPlayback(e, button)));

