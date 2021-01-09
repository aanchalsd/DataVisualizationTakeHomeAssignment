import { x } from './modules/sunburst.js';
import { svg } from './modules/scatter.js';
import { barC } from './modules/barchart.js';

const btnSbt = document.querySelector('#btnSbt');
const scatter = document.querySelector('#btnSct');
const barChart = document.querySelector('#btnBct');
const all = document.querySelector('#all');
const refresh = document.querySelector('#refresh');

const sunBurst = document.querySelector('#sunburst');
const ScaTter = document.querySelector('#scatter');
const barCht = document.querySelector('#barchart');

let bool = true;

// initial class set for buttons

sunBurst.classList.toggle('hidden', bool);
ScaTter.classList.toggle('hidden', bool);
barCht.classList.toggle('hidden', bool);

// event listeners for button clicks

btnSbt.addEventListener('click', function () {
  sunBurst.classList.toggle('hidden', !bool);
  ScaTter.classList.toggle('hidden', bool);
  barCht.classList.toggle('hidden', bool);
});

btnSct.addEventListener('click', function () {
  ScaTter.classList.toggle('hidden', !bool);
  sunBurst.classList.toggle('hidden', bool);
  barCht.classList.toggle('hidden', bool);
});

btnBct.addEventListener('click', function () {
  barCht.classList.toggle('hidden', !bool);
  sunBurst.classList.toggle('hidden', bool);
  ScaTter.classList.toggle('hidden', bool);
});

all.addEventListener('click', function () {
  barCht.classList.toggle('hidden', !bool);
  sunBurst.classList.toggle('hidden', !bool);
  ScaTter.classList.toggle('hidden', !bool);
});

refresh.addEventListener('click', function () {
  barCht.classList.toggle('hidden', bool);
  sunBurst.classList.toggle('hidden', bool);
  ScaTter.classList.toggle('hidden', bool);
});
