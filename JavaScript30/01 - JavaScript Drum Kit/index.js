
function app() {
  const CLICK_EVENT = 'click';
  const KEYDOWN_EVENT = 'keydown';
  const TRANSITION_END_EVENT = 'transitionend';

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

  function addTransitionEndListeners(keys) {
    keys.forEach(function(key) {
      key.addEventListener(TRANSITION_END_EVENT, function() {
        key.classList.remove('playing');
      });
    });
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
    const keys = document.querySelectorAll('.key')
    addClickListeners(keys);
    addKeydownListener(window);
    addTransitionEndListeners(keys);
  }

  return {
    start
  };

}

const App = app();

App.start();