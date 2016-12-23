const Util = {
  convertToArray(arrLike) {
    return Array.prototype.slice.call(arrLike);
  }
};

function app() {
  const CLICK_EVENT = 'click';
  const KEYDOWN_EVENT = 'keydown';

  function addPlayingClass(key) {
    if(key) {
      const className = key.className;

      key.className = `${className} playing`;
    }

    return key;
  };

  function getAudio(keyCode) {
    return document.querySelector(`audio[data-key="${keyCode}"]`);
  }

  function playSound(audioEl) {
    if(audioEl) {

    }
  }

  function addKeydownListener(el) {
  
    el.addEventListener(KEYDOWN_EVENT, function(e) {
      const keycode = e.keyCode;
      const queryStr = `div[data-key="${keycode}"]`;
      const key = document.querySelector(queryStr);
      addPlayingClass(key);
      playSound(getAudio(keycode));
    });
  };

  function addClickListeners(els) {

    function addClickListener(key) {
      key.addEventListener(CLICK_EVENT, function() {
        addPlayingClass(key);
        //const audio = getAudio()
      });
    }

    const keys = Util.convertToArray(els)
    keys.forEach(addClickListener)
  }

  function start() {
    addClickListeners(document.getElementsByClassName('key'));
    addKeydownListener(window);
  }

  return {
    start
  };

}

const App = app();

App.start();