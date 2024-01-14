import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");

const makePromise = ({ value, delay, state }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(value);
        } else {
          reject(value);
        }
      }, delay);
    });
  };


form.addEventListener('submit', event => {
    event.preventDefault();
    const delay = form.delay.value;
    const state = form.state.value;
  
    makePromise({ value: delay, delay: delay, state: state })
      .then(value =>
        iziToast.show({
            title: '✔️',
          message: `Fulfilled promise in ${delay} ms!`,
          position: 'topRight',
          messageColor: '#fff',
          messageSize: '20px',
          backgroundColor: '#59A10D',
          close: false,
          closeOnClick: true,
          progressBarEasing: 'linear',
        })
      )
      .catch(error =>
        iziToast.show({
            title: '❌',
          message: `Rejected promise in ${delay} ms!`,
          position: 'topRight',
          messageColor: '#fff',
          messageSize: '20px',
          backgroundColor: '#EF4040',
          close: false,
          closeOnClick: true,
          progressBarEasing: 'linear',
        })
      );
    form.reset();
  });
  
