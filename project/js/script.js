/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const promoAdv = document.querySelector('.promo__adv');
console.log(promoAdv);
const promoImg = promoAdv.querySelectorAll('img');
/* console.log(promoImg); */
promoImg.forEach(item => {//задание №1 с помощью перебора
    item.remove()
});  
const genre = document.querySelector('.promo__genre');
console.log(genre)
genre.textContent = "ДРАМА";//задание 2

const element = document.querySelector('.promo__bg');
console.log(element);
element.setAttribute('style','background: url(/project/img/bg.jpg) center center/cover no-repeat')//задание 3

