const input = document.querySelector('#validation-input');
const validLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);
input.addEventListener('focus', onInputFocus);

function onInputBlur() {
  
  if (input.value.length == validLength) {
    input.classList.add('valid');
  } else if (input.value.length != validLength) {
    input.classList.add('invalid');
  }
}

function onInputFocus() {
  if (input.classList.contains('valid')) {
    input.classList.remove('valid');
  } else if (input.classList.contains('invalid')) {
    input.classList.remove('invalid');
  }
}
