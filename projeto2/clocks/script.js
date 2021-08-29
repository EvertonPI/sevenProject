const digital = document.querySelector(".digital");
const sElement = document.querySelector(".p_s");
const mElement = document.querySelector(".p_m");
const hElement = document.querySelector(".p_h");

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digital.innerHTML = `${fixZero(hour)} : ${fixZero(minute)} : ${fixZero(
    second
  )}`;

  let sDeg = (360 / 60) * second - 90;
  let mDeg = (360 / 60) * minute - 90;
  let hDeg = (360 / 12) * hour - 90;

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

const fixZero = time => (time < 10 ? `0${time}` : time);
// podemos usar de duas maneiras chamando uma função unica no setInterval
// setInterval(()=>updateClock());, 1000);

setInterval(updateClock, 1000);
updateClock();
