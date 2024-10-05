// Получаем элементы
const myDiv = document.getElementById('myDiv');
const button = document.getElementById('toggleButton');

// Переменная для отслеживания стиля
let isStyled = false;

// Функция для изменения стилей
button.addEventListener('click', function() {
    if (isStyled) {
        myDiv.style.backgroundColor = 'lightgray';
        myDiv.style.color = 'black';
        myDiv.style.border = '1px solid black';
    } else {
        myDiv.style.backgroundColor = 'lightblue';
        myDiv.style.color = 'red';
        myDiv.style.border = '2px solid blue';
    }
    isStyled = !isStyled;
});
