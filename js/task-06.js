// Напиши скрипт, который при потере фокуса 
// на инпуте (событие blur), проверяет его содержимое 
// на правильное количество введённых символов.

// // Сколько символов должно быть в инпуте, указывается 
// в его атрибуте data-length.
// // Если введено подходящее количество символов, 
// то border инпута становится зелёным, если неправильное - красным.
// // Для добавления стилей, используй CSS-классы valid 
// и invalid, которые мы уже добавили в исходные файлы задания.

const inputFormEl = document.querySelector('#validation-input');

inputFormEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(inputFormEl.getAttribute('data-length'))) {
        inputFormEl.classList.add('valid');
    } else {
        inputFormEl.classList.remove('valid');
        inputFormEl.classList.add('invalid');
    }
}

// const inputEl = document.querySelector('#validation-input');
// console.log(inputEl)

// inputEl.addEventListener("blur", validInvalid)

// function validInvalid(event) {
//     if (event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
//         inputEl.classList.add('valid');
//         inputEl.classList.remove('invalid');        
//     }
//     else {
//         inputEl.classList.add('invalid');
//         inputEl.classList.remove('valid');
//     }
// }
