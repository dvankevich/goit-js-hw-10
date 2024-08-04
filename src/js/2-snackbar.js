'use strict';

const button = document.querySelector('button');
const delay = document.querySelector('input[name="delay"]');
let promiceDelay = delay.value;

delay.addEventListener('change', () => {
  promiceDelay = delay.value;
  //console.log(promiceDelay);
});

// ToDo: можна і без stateInputs. До інпутів можна добратись і через
// stateForm.
// Певно, через деякий час, я буду сам над собою сміятись. :)
const stateInputs = document.querySelectorAll('input[name="state"]');
const stateForm = document.querySelector('.form');
//console.log(stateForm);

const handleClick = event => {
  event.preventDefault();
  //console.log(stateForm);
  let promiceState = '';
  stateInputs.forEach(input => {
    if (input.checked) {
      promiceState = input.value;
    }
  });
  //console.log(promiceState, promiceDelay);
  if (promiceState && promiceDelay) {
    // console.log(`${promiceState} in delay: ${promiceDelay}`);

    // Create promise
    const promise = new Promise((resolve, reject) => {
      //console.log('new Promice');
      let msg = '';
      setTimeout(() => {
        if (promiceState === 'fulfilled') {
          msg = `✅ Fulfilled promise in ${promiceDelay} ms`;
          resolve(msg);
        } else {
          msg = `❌ Rejected promise in ${promiceDelay} ms`;
          reject(msg);
        }
      }, promiceDelay);
    });
    // Registering promise callbacks
    promise.then(
      value => {
        console.log(value); // "Success! Value passed to resolve function"
      },
      error => {
        console.log(error); // "Error! Error passed to reject function"
      }
    );
    // reset form values
    stateForm.reset();
  } else {
    window.alert('Please fill in all fields.');
  }
};

//button.addEventListener('submit', handleClick);
button.addEventListener('click', handleClick);
