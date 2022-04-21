// Напиши скрипт, который реагирует на изменение 
// значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер 
// текста.

const inputEl = document.querySelector('input#font-size-control');

const textEl = document.getElementById('text');

inputEl.addEventListener('input', onChangeInput);

textEl.style.fontSize = `${inputEl.value}px`;

const onChangeInput = () => {
    textEl.style.fontSize = `${inputEl.value}px`;
};


