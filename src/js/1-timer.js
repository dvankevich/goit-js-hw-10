'use strict';

// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;

//let userSelectedDateUnixTimestamp;
// https://nesin.io/blog/javascript-date-to-unix-timestamp

// https://www.scaler.com/topics/javascript-disable-button/
const startButton = document.querySelector('button');
//console.log(startButton.disabled);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = Date.now();
    userSelectedDate = selectedDates[0];
    //userSelectedDateUnixTimestamp = userSelectedDate.getTime();
    //console.log(userSelectedDate.getTime());
    //console.log(dateNow);
    if (userSelectedDate.getTime() < dateNow) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

const fp = flatpickr('input#datetime-picker', options);

// Get the value of the "data-days" attribute
//daysElement.innerText = '15';

//console.log(document.querySelector('.timer .field .value[data-days]'));

const interval = {
  days: '03',
  hours: '09',
  minutes: '01',
  seconds: '04',
};

function updateTimerInterface(interval) {
  // Get the element with the "data-*" attributes
  const daysElement = document.querySelector('.timer .field .value[data-days]');
  const hoursElement = document.querySelector(
    '.timer .field .value[data-hours]'
  );
  const minutesElement = document.querySelector(
    '.timer .field .value[data-minutes]'
  );
  const secondsElement = document.querySelector(
    '.timer .field .value[data-seconds]'
  );

  // set interface elements
  daysElement.innerText = interval.days;
  hoursElement.innerText = interval.hours;
  minutesElement.innerText = interval.minutes;
  secondsElement.innerText = interval.seconds;
}

function convertUnixTimeToTime(milliseconds) {
  function addZero(s) {
    if (s.length === 1) {
      s = '0' + s;
    }
    return s;
  }
  // Отримання кількості днів, годин, хвилин та секунд
  const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000)).toString();
  const hours = Math.floor(
    (milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  ).toString();
  const minutes = Math.floor(
    (milliseconds % (60 * 60 * 1000)) / (60 * 1000)
  ).toString();
  const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000).toString();

  // Повернення результату у вигляді об'єкта
  return {
    days: addZero(days),
    hours: addZero(hours),
    minutes: addZero(minutes),
    seconds: addZero(seconds),
  };
}

//test updateTimerInterface(days, hours, minutes, seconds) function
updateTimerInterface(interval);

console.log(Date.now());
console.log(convertUnixTimeToTime(1722538054379));
