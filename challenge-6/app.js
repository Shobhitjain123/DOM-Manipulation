//Setting the numbers in the clock
const clock = document.querySelector(".clock");
for (let i = 1; i <= 12; i++) {
  const numberElement = document.createElement("div");
  numberElement.classList.add("number");
  numberElement.style.setProperty("--rotation", i * 30 + "deg"); // 360/12 = 30 degrees per number
  const span = document.createElement("span");
  span.textContent = i;
  numberElement.appendChild(span);

  clock.appendChild(numberElement);
}

// Setting digital clock
function clockUpdate() {
  const time = new Date();
  const hour =
    String(time.getHours()).length > 1
      ? time.getHours()
      : `0${time.getHours()}`;
  const minutes =
    String(time.getMinutes()).length > 1
      ? time.getMinutes()
      : `0${time.getMinutes()}`;
  const seconds =
    String(time.getSeconds()).length > 1
      ? time.getSeconds()
      : `0${time.getSeconds()}`;
  const setTime = document.querySelector(".digital-clock");
  setTime.innerHTML = `${hour}:${minutes}:${seconds}`;
}
clockUpdate()
setInterval(clockUpdate, 1000);

// Setting hand movement

const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector(".second")

function clockAngle(){
    const time = new Date();
    const hourAngle = ( (time.getHours() % 12) * 30 ) + (time.getMinutes() * 0.5) + (time.getSeconds() * (0.5 / 60));
    const minuteAngle = (time.getMinutes() * 6) + (time.getSeconds() * 0.1)
    const secondAngle = (time.getSeconds() * 6)
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`
    hourHand.style.transform = `rotate(${hourAngle}deg)`
    secondHand.style.transform = `rotate(${secondAngle}deg)`
    
}


clockAngle()
setInterval(clockAngle, 1000)