function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnChangeColor = document.querySelector('.change-color');
const bgColorName = document.querySelector('.color');

onBtnChangeColor.addEventListener('click', changeColor);


function changeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  bgColorName.textContent = color;
}

