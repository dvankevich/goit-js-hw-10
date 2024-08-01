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

function updateTimerInterface(days, hours, minutes, seconds) {
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
  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}

//test updateTimerInterface(days, hours, minutes, seconds) function
updateTimerInterface('09', '22', '56', '33');
