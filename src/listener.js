import { formatError } from './common.js';
import { sound } from './sound.js';
import { timerResult } from './timer.js';
let timerId;
let inputTime;
let seconds;
let minutes;
let hours;
export const listenerStart = (event) => {
  event.preventDefault();
  inputTime = document.getElementById('inputTime').value * 60;
  isNaN(inputTime)
    ? (timerResult.innerHTML = formatError('введите положительное число'))
    : (timerId = setInterval(() => {
        seconds = inputTime % 60;
        minutes = (inputTime / 60) % 60;
        hours = (inputTime / 60 / 60) % 60;
        inputTime--;
        if (inputTime <= -1) {
          clearInterval(timerId);
          sound();
          timerResult.innerHTML = '';
        } else
          timerResult.innerHTML = `${Math.trunc(hours)}:${Math.trunc(
            minutes
          )}:${seconds}`;
      }, 1000));
};
export const listenerStop = (event) => {
  event.preventDefault();
  inputTime
    ? clearInterval(timerId)
    : (timerResult.innerHTML = formatError('field is empty'));
};
