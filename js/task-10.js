function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    let boxSize = 30 + i * 10;
    const markup = `<div class="square" style="background-color:${getRandomHexColor()}; width:${boxSize}px; height:${boxSize}px;"></div>`;
    boxes.insertAdjacentHTML('beforeend', markup);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  document.querySelector('input').value = '';
}
