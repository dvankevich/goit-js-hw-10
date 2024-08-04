'use strict';

const button = document.querySelector('button');
const delay = document.querySelector('input[name="delay"]');
let promiceDelay = delay.value;

delay.addEventListener('change', () => {
  promiceDelay = delay.value;
  //console.log(promiceDelay);
});

const stateInputs = document.querySelectorAll('input[name="state"]');

const handleClick = event => {
  //console.log('--- submit ---');
  let promiceState = '';
  stateInputs.forEach(input => {
    if (input.checked) {
      promiceState = input.value;
    }
  });
  //console.log(promiceState, promiceDelay);
  if (promiceState && promiceDelay) {
    console.log(
      `set promice with state: ${promiceState} and dellay: ${promiceDelay}`
    );
  } else {
    window.alert('Please fill in all fields.');
  }
};

//button.addEventListener('submit', handleClick);
button.addEventListener('click', handleClick);
