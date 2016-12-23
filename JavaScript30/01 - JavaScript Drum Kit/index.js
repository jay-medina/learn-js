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

  function addKeydownListener(el) {
  
    el.addEventListener(KEYDOWN_EVENT, function(e) {
      const keycode = e.keyCode;
      const queryStr = `div[data-key="${keycode}"]`;
      const key = document.querySelector(queryStr);
      addPlayingClass(key);
    });
  };

  function addClickListeners(els) {

    function addClickListener(key) {
      key.addEventListener(CLICK_EVENT, () => addPlayingClass(key));
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