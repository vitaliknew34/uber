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

/* let message = (login == 'Cотрудник') ? 'привет' :
(login == 'Директор') ? 'Здраствуйте' :
(login == '') ? 'Нет логина' : '' */

//УРОК 4
//ПРОВЕРКА ЛОГИНА
/* Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
Блок-схема:


Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null. */
/* 
let UserName = prompt ('Кто там?', '');

if (UserName =='Admin' ) {
   let passwordA = prompt ('Пароль?');

   if(passwordA == 'Я главный') {
      alert('Здраствуйте')
    }
    else if (passwordA == '' || passwordA == null) {
       alert('Отменено')
    }
    else {
       alert('Пароль не верный')
    }

}
else if ( UserName == '' || UserName == null) {
   alert('Отменено')
}
else {
   alert('Я вас не знаю')
} 
 */

/* Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */
/* let a = 5
let b = -3 
if (a > 0 && b > 0) {
    alert(a - b)
}
if (a < 0 && b < 0) {
    alert(a * b)
}
if (a < 0 && b > 0 || a > 0 && b < 0 ) {
    alert ( a + b)
} */

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* 'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
const a = prompt('Один из последних просмотренных фильмов?', '')
const b = prompt('На сколько оцените его?')
const c = prompt('Один из последних просмотренных фильмов?', '')
const d = prompt('На сколько оцените его?')

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */


/* let svetophor = prompt("Введите цвет (red,green,yellow)");
    
    switch(svetophor){
        case "red":
            alert("Стоп");
            break;
        case "green":
            alert("Вперед");
            break;
        case "yellow":
            alert("Внимание");
            break;
        default:
            alert("Поломка светофора");
    } */
    // Перепишите для if и else
   /*  switch (browser) {
        case 'Edge':
          alert( "You've got the Edge!" );
          break;
      
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
          alert( 'Okay we support these browsers too' );
          break;
      
        default:
          alert( 'We hope that this page looks ok!' );
      } */

      //Решение

    /* let browser = prompt('Какой?');

        if (browser == 'Edge') {
            alert("You've got the Edge");
        }
        else if (browser == 'Chrome' 
            || browser == 'Firefox' 
            || browser == 'Safari' 
            || browser == 'Opera' ) {
            alert('Okay we support these browsers too' );
        }
        else {
            alert('We hope that this page');
        } */
    
        //Перепишите код с использованием одной конструкции switch:

        /* const number = +prompt('Введите число между 0 и 3', '');

        if (number === 0) {
        alert('Вы ввели число 0');
        }

        if (number === 1) {
        alert('Вы ввели число 1');
        }

        if (number === 2 || number === 3) {
        alert('Вы ввели число 2, а может и 3');
        } */

    
        //Решение
        /* const number = +prompt('Введите число между 0 и 3', '')
        switch (number) {
            case 0:
                alert('Вы ввели число 0');
                break;
            case 1: 
                alert('Вы ввели число 1');
                break;
            case 2:
            case 3:
                alert('Вы ввели число 2, а может и 3');
                break;
            default: 
                alert('некорректно')
        } */
       /* let a = ((Math.random() * 15).toFixed(0));
        switch (a) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '10':
            case '11':
            case '12':
            case '13':
            case '14':
            case '15':
                alert('ок')
                break;
            default:
                alert('no')
        } */
        /* let v = +prompt('введите число', '')
        for (; v <= 15; v++){
           alert (v);
        } */
       /*  let a = 3;
        let b = 4; */ 
        
            let a = +prompt('Введите первое число', '');
            let b = +prompt('Введите второе число', '');
            let c = prompt('какое действие выполнить?', '');
          /*   if (a !== number){
                for (let t = +prompt('Введите первое число', '' ); t !== null ;) {

                }
            } */
        function calc() {
            if ( c == '+'  || c == 'Сложение'|| c == 'сложение' || c == 'Слажение'|| c == 'слажение' || c == 'плюс' || c == 'Плюс') {
                alert(`сложение ответ: ${a + b}`);
            }
            else if ( c == '-' || c == 'вычитание'|| c == 'Вычитание'|| c == 'Вычетание'|| c == 'вычетание' ) {
                alert(`вычитание ответ: ${a - b}`);
            }
            else if ( c == '*' || c == 'умножение' || c == 'Умножение' || c == 'умнажение' || c == 'Умнажение' ) {
                alert(`умножение ответ: ${a * b}`);
            }
            else if ( c == '/' || c == 'Деление' || c == 'деление' ) {
                alert(`деление ответ: "${a}" разделить на ${b} = ${a / b}`);
            }
            else  {
                for (let i = prompt('ошибка ввода, повторите действие ("+" , "-" , "*" , "/") ',''); i !== null  ;  ) {
                   
                    if ( i == '+' ) {
                        alert(`сложение ответ: ${a + b}`);break
                    }
                    else if ( i== '-') {
                        alert(`вычитание ответ: ${a - b}`);break
                    }
                    else if (i == '*') {
                        alert(`умножение ответ: ${a * b}`);break
                    }
                    else if (i == '/') {
                        alert(`деление ответ: ${a} разделить на "${b}" =  ${a / b}`);break
                    }
                    else {
                        i = prompt('ошибка ввода, повторите действие ','')
                        /* if ( i == '+' ) {
                            alert(`сложение ответ: ${a + b}`);break;
                        } */
                    }

                    /* alert('') ;break; */
                }
            }

        }
        calc(); 
       
        /* let test = calc(); */
        /* alert(test); */
        
       
       /* фрил по жизни остановился на логических операторах */