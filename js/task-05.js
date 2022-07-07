const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange () {
    output.textContent = input.value;
    if (output.textContent === '') {
        return (output.textContent = 'Anonymous');
    }
};
