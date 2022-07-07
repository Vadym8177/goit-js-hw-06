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
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const newBoxes = document.createElement('div');
    newBoxes.style.width = boxSize + 'px';
    newBoxes.style.height = boxSize + 'px';
    boxSize += 10;
    newBoxes.style.backgroundColor = getRandomHexColor();
    boxes.append(newBoxes);
  }
}


function destroyBoxes(event) {
  boxes.innerHTML = '';
  document.querySelector('input').value = '';
}