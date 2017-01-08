const player = document.querySelector('.player');
const video = player.querySelector('.player__video');

const playButton = player.querySelector('.player__button');
const volume = player.querySelector('input[name="volume"]');
const playbackRate = player.querySelector('input[name="playbackRate"]');
const skipBack = player.querySelector('button[data-skip="-10"]');
const skipForward = player.querySelector('button[data-skip="25"]');

video.volume = volume.value;
video.playbackRate = playbackRate.value;

playButton.addEventListener('click', function() {
  if(video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
});

volume.addEventListener('change', function(e) {
  video.volume = volume.value;
});

playbackRate.addEventListener('change', function() {
  video.playbackRate = playbackRate.value;
});


skipBack.addEventListener('click', function() {
  video.currentTime -= 10;
});

skipForward.addEventListener('click', function() {
  video.currentTime += 25;
});

