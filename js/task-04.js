const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementtBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const updateValue = () => {
  valueEl.textContent = counterValue;
};

incrementtBtn.addEventListener('click', () => {
  counterValue += 1;
  updateValue();
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateValue();
});
