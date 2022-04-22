// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов 
// очищается.

// 1. Создай функцию createBoxes(amount), которая принимает 
// один параметр - число. Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.
// 2. Размеры самого первого <div> - 30px на 30px.
// 3. Каждый элемент после первого, должен быть шире и выше 
// предыдущего на 10px.
// 4. Все элементы должены иметь случайный цвет фона в 
// формате HEX. Используй готовую функцию getRandomHexColor 
// для получения цвета.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('div > input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

const createBox = (value) => {
  value = refs.input.value;
  let boxSize = 30;
  const elements = [];

  for (let i = 0; i < value; i +=1) {
    const newBox = document.createElement("div");
    let changeBoxSize = boxSize + (i * 10);
    newBox.style.width = `${changeBoxSize}px`;
    newBox.style.height = `${changeBoxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    elements.push(newBox);
  }
  return refs.boxes.append(...elements)
};

const destroyBox = () => {
  refs.boxes.innerHTML = '';
}

refs.btnCreate.addEventListener('click', createBox);
refs.btnDestroy.addEventListener('click', destroyBox);