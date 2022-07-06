const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onOutputChange);
function onOutputChange(event) {
  text.style.fontSize = event.target.value + 'px';
}
