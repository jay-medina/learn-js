function start() {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hrHand = document.querySelector('.hour-hand');
  const INIT_DEG = 90;

  function updateHand(el, degs) {
    el.style.transform = `rotate(${degs}deg)`;
  }

  function toDegrees(current, base) {
    return (current / base) * 360 + INIT_DEG;
  }

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();

    const inDegs = (seconds / 60) * 360 + INIT_DEG;

    updateHand(secondHand, toDegrees(seconds, 60));
    updateHand(minuteHand, toDegrees(mins, 60));
    updateHand(hrHand, toDegrees(hrs, 12));
  }

  setInterval(setDate, 1000)
  setDate()

}

start();