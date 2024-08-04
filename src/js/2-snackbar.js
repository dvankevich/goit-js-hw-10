'use strict';

const button = document.querySelector('button');
const delay = document.querySelector('input[name="delay"]');
let promiceDelay = delay.value;

delay.addEventListener('change', () => {
  promiceDelay = delay.value;
  console.log(promiceDelay);
});

const stateInputs = document.querySelectorAll('input[name="state"]');

const handleClick = event => {
  let promiceState = '';
  stateInputs.forEach(input => {
    if (input.checked) {
      promiceState = input.value;
    }
  });
  console.log(promiceState, promiceDelay);
};

button.addEventListener('click', handleClick);
