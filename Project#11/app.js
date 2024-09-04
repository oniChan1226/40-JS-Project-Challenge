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

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// let date = new Date(2024, 10, 5, 11, 30, 0);
// console.log(date);
const date = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

let month = date.getMonth(); // This will return the 0 based array index of month from 0 - 11, so we would need an array containing the month name
month = months[month];
const futureDate = date.getDate();

let day = date.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day} ${futureDate} ${month} ${year} ${hours}:${minutes}`;

const time = date.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = time - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  // how many ms are in one day?
  const oneDay = 24*60*60*1000; // hrs * mnts * secs * milisecs
  // console.log(oneDay);

  // how many ms are in one hour?
  const oneHour = 60*60*1000; 

  // how many ms are in one minute?
  const oneMinute = 60*1000; 

  // calculate all values
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t%oneDay)/oneHour);
  let minutes = Math.floor((t%oneHour)/oneMinute);
  let seconds = Math.floor((t%oneMinute)/1000);

  // set values array:
  const values = [days,hours,minutes,seconds];

  function format(item) {
    if(item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });
  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">This giveaway has expired</h4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();