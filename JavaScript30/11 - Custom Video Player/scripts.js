const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playButton = player.querySelector('.player__button');

console.log(video);

playButton.addEventListener('click', function() {
  if(video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
});