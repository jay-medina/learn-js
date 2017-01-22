const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  }).then(localMediaStream => {
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  }).catch(function(err) {
    console.err(err);
  });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(function() {
    ctx.drawImage(video, 0,0, width,height);
  }, 24);
  console.log(width,height)
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
}

getVideo();

const controls = document.querySelector('.controls');
const takePhotoBtn = controls.addEventListener('click', takePhoto);