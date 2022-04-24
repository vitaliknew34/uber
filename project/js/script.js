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
//Задание 1
const promoAdv = document.querySelectorAll('.promo__adv img');
console.log(promoAdv);
promoAdv.forEach(item => { // c помощью перебора
    item.remove()
});  
//обычная функция
/* promoAdv.forEach(function (item) { 
    item.remove()
}); */

// или ВТОРОЙ вариант РЕШЕНИЯ первого задания

/* const promoAdv = document.querySelector('.promo__adv');
console.log(promoAdv);
const promoImg = promoAdv.querySelectorAll('img'); 
console.log(promoImg); 
promoImg.forEach(item => { // c помощью перебора
    item.remove()
});  
 */
//задание 2
const genre = document.querySelector('.promo__genre');
console.log(genre)
genre.textContent = "ДРАМА";//задание 2
//Задание 3
const poster = document.querySelector('.promo__bg');
console.log(poster);
poster.style.backgroundImage = 'url("img/bg.jpg")';//по образцу

// Задание 3 Второй вариант добавление атрибута
/* poster.setAttribute('style','background: url(/project/img/bg.jpg) center center/cover no-repeat')// */

//задание 4 и 5
const movieList = document.querySelector('.promo__interactive-list');
    console.log(movieList);
    movieList.innerHTML = "";
    movieDB.movies.sort();// cортирвка массива
    movieDB.movies.forEach((film,i) => {
        movieList.innerHTML += 
        `<li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>`
    });

/* МОЙ ВАРИАНТ 5 Задачи 
//задание 5 убрать inline-block для списка и ol вместо ul
    const list = document.querySelector('ul.promo__interactive-list');
    console.log(list);
    const listItem = list.querySelectorAll('li');
    console.log(listItem);
    listItem.forEach(item => {
        item.setAttribute('style','display: list-item')
    });//измененения стиля li нумерация
    list.setAttribute('style','list-style-type: auto');//изменение ul(ol) нумерация
  */
/* // изменение тега
 // {HTMLElement} element Элемент, имя тэга которого будет заменено.
 // {String} newTagName Новое имя тэга.
 
    
    function replaceTag(element, newTagName) {
    // Создаём новый тэг.
    var newTag = document.createElement(newTagName);

    // Вставляем новый тэг перед старым.
    element.parentElement.insertBefore(newTag, element);

    // Переносим в новый тэг атрибуты старого с их значениями.
    for (var i = 0, attrs = element.attributes, count = attrs.length; i < count; ++i)
        newTag.setAttribute(attrs[i].name, attrs[i].value);

    // Переносим в новый тэг все дочерние элементы старого.
    var childNodes = element.childNodes;
    while (childNodes.length > 0)
        newTag.appendChild(childNodes[0]);

    // Удаляем старый тэг.
    element.parentElement.removeChild(element);
}
replaceTag(list, 'ol');
 */