
function app() {
  const CLICK_EVENT = 'click';
  const KEYDOWN_EVENT = 'keydown';

  function addPlayingClass(key) {
    if(key) {
      key.classList.add('playing');
    }

    return key;
  };

  function getAudio(keyCode) {
    return document.querySelector(`audio[data-key="${keyCode}"]`);
  }

  function getButton(keyCode) {
    return document.querySelector(`div[data-key="${keyCode}"]`);
  }

  function playSound(audioEl) {
    if(audioEl) {
      audioEl.currentTime = 0;
      audioEl.play();
    }
  }

  function animate(keyCode) {
    addPlayingClass(getButton(keyCode));
    playSound(getAudio(keyCode));
  }

  function addTransitionEndListener(els) {

  } 

  function addKeydownListener(el) {
  
    el.addEventListener(KEYDOWN_EVENT, function(e) {
      const keyCode = e.keyCode;
      animate(keyCode);
    });
  }

  function addClickListeners(keys) {

    function addClickListener(key) {
      key.addEventListener(CLICK_EVENT, function() {
        const keyCode = key.attributes['data-key'].nodeValue;
        animate(keyCode);
      });
    }

    keys.forEach(addClickListener)
  }

  function start() {
    addClickListeners(document.querySelectorAll('.key'));
    addKeydownListener(window);
  }

  return {
    start
  };

}

const App = app();

App.start();