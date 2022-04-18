// Напиши скрипт который, при наборе текста 
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputField = document.querySelector('#name-input' );
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', newInput);

function newInput(event) {
    outputField.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        outputField.textContent = 'Anonymous'
    }
}