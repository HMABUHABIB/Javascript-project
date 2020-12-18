const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2020, 11, 22, 00, 00, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const day = futureDate.getDay();
const weekday = weekdays[day];
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
giveway.textContent = `${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
// future time in ms 
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  //values in ms
  const onnDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / onnDay;
  days = Math.floor(days);
  let hours = Math.floor((t % onnDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log(days);
  console.log(hours);
  console.log(minutes);

  items[0].innerHTML = days;
  items[1].innerHTML = hours;
  items[2].innerHTML = minutes;
  items[3].innerHTML = seconds;

}


window.onload = startInterval;
function startInterval() {
  setInterval("getRemainingTime();", 1000);
}

