"use strict";
/* let num = 5;
const leftBorderWidtch = 1;

num = 10;

console.log(num);

const isCheked = true,
      isClose = true;

console.log(isCheked && !isClose); */
// "&&"- логическое "И"
// "||" - логическое "ИЛИ"
// "!" - логическое "НЕ"

 //задача 1 geek  
 //Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

 //Решение:

 /* let TempC = +prompt('введите число') 
 alert ((9/5) * TempC +32) */

//Задача 2 geek 

/* Работа с переменными.
a) Объявить две переменные: admin и name. Записать в name строку «Василий»;
b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»). */

//Решение:

   /* let Name = 'Василий'
   let admin = Name
   alert(admin) */

//Задача 3 geek

/* *Чему будет равно JS-выражение 1000 + "108"?  */
 
//Решение:
   // Ответ: 1000108
   /* let namber = (1000 + '108')
   alert(namber) */



 /* урок 2
 Создайте страницу, которая спрашивает имя у пользователя и выводит его. */
 /*  let Name = prompt('Ваше имя?')
  alert(Name) */

 // урок 3
 //if(если), else (иначе) 

/*  Пример: */

/* let yers = prompt('В каком году появилась специфкация ecmascript-2015', '')
if (yers < 2015) {
   alert('Это слишком рано..');
}
else if (yers > 2015) {
   alert('Это слишком поздно..');
}
else {  
   alert('Вы знаток');
} */

//Пример 2
/* let officialName = prompt('какое "официальное название" JavaScript?')
if (officialName == 'ECMAScript') {
   alert('Верно');
}
else {
   alert('Не знаете? "ECMAScript"!');
} */
//Пример 3
/* let namber = +prompt ('Число?', '')
if(namber > 0){
   alert('1');
}
else if ( namber < 0) {
   alert(-1)
}
else {
   alert('0')
} */

/* Пример 4 
Перепишите с условным оператором "?"
let result;
if (a + b < 4) {
   result = 'Мало';
} 
else {
   result = 'Много'
} */
/* let result = (a + b < 4) ? 'Мало' : 'Много'; */

//Пример 4.1 Переписать с условным оператором "?"
/* let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

// Решение

let message = (login == 'Cотрудник') ? 'привет' :
(login == 'Директор') ? 'Здраствуйте' :
(login == '') ? 'Нет логина' : ''