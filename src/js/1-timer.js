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
