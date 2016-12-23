
const CLICK_EVENT = 'click';

var addPlayingClass = function(key) {
  const className = key.className;

  key.className = `${className} playing`;
};

var addClickListener = function(key) {
  key.addEventListener(CLICK_EVENT, () => addPlayingClass(key));
}

function convertToArray(arrLike) {
  return Array.prototype.slice.call(arrLike);
}
function run() {
  const keys = convertToArray(document.getElementsByClassName('key'));
  keys.forEach(addClickListener);
}

run();