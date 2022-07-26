const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onOutputChange);

text.style.fontSize = input.value + 'px';

function onOutputChange(e) {
  text.style.fontSize = e.currentTarget.value + 'px';
}