let panel = document.getElementById("panel");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let startTime = 0;
let stopTime = 0;
let repeatTime  = 0;

start.disabled = false
stop.disabled = true
reset.disabled = true

function displayTime() {
  let currentTime = new Date(Date.now() - startTime + stopTime);
  let hour = String(currentTime.getHours()-9).padStart(2,"0");
  let minute = String(currentTime.getMinutes()).padStart(2,"0");
  let second = String(currentTime.getSeconds()).padStart(2,"0");
  let millisecond = String(currentTime.getMilliseconds()).padStart(3, "0");
  
  panel.textContent = `${hour}:${minute}:${second}:${millisecond}`;
  repeatTime = setTimeout(displayTime,10);
}

start.addEventListener("click",function() {
  start.disabled = true
  stop.disabled = false
  reset.disabled = false
  startTime = Date.now();
  displayTime();
});

stop.addEventListener("click",function(){
  start.disabled = false
  stop.disabled = true
  reset.disabled = false
  clearTimeout(repeatTime)
  stopTime += (Date.now() - startTime);
})

reset.addEventListener("click",function(){
  start.disabled = false
  stop.disabled = true
  reset.disabled = true
  clearTimeout(repeatTime)
  panel.textContent = "00:00:00:000";
  stopTime = 0;
})