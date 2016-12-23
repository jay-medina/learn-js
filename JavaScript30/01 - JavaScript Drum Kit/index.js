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

  function addKeydownListener() {
  
    window.addEventListener(KEYDOWN_EVENT, function(e) {
      const keycode = e.keyCode;
      const queryStr = `div[data-key="${keycode}"]`;
      const key = document.querySelector(queryStr);
      addPlayingClass(key);
    });
  };

  function addClickListeners() {

    function addClickListener(key) {
      key.addEventListener(CLICK_EVENT, () => addPlayingClass(key));
    }

    const keys = Util.convertToArray(document.getElementsByClassName('key'));
    keys.forEach(addClickListener);
  }

  function start() {
    addClickListeners();
    addKeydownListener();
  }

  return {
    start
  };

}

const App = app();

App.start();