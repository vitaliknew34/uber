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

         //СТРЕЛОЧНАЯ ФУНКЦИЯ
        /*const sum = (a,b) => {
            return a + b;
        }
        */


/* //ВЫВЕСТИ НЕЧЕТНЫЕ ЧИСЛА
       for (let i = 0; i < 10; i++) {

            // если true, пропустить оставшуюся часть тела цикла
            if (i % 2 == 0) continue;
          
            alert(i); // 1, затем 3, 5, 7, 9
} */
//ПЕРВАЯ ПРОБА КАЛЬКУЛЯТОР

           /*  let a = +prompt('Введите первое число', '');

            if(isNaN(a)){
                for (; ;) {
                    if(isNaN(a)) {
                        a = +prompt('Введите первое число', '');
                    }
                    else {
                       break;
                    }
                }
            }
        
            let b = +prompt('Введите второе число', '');
            
            if(isNaN(b)){
                for (; ;) {
                    if(isNaN(b)) {
                        b = +prompt('Введите второе число', '');
                    }
                    else {
                       break;
                    }
                }
            }

            let c = prompt('какое действие выполнить?', ''); */

            /* if(a == '0') {
                for(; ;) {

                    a = +prompt('Вы не ввели число, повторите попытку', '')
                    
                }
            }
             */

        /* function calc() {
            let a = +prompt('Введите первое число', '');
            
            if(isNaN(a) || a == 0){
                for (; ;) {
                    if(isNaN(a) || a == 0) {
                        a = +prompt('Введите первое число, повторно!', '');
                    }
                    else {
                       break;
                    }
                }
            }
        
            let b = +prompt('Введите второе число', '');
            
            if(isNaN(b)){
                for (; ;) {
                    if(isNaN(b)) {
                        b = +prompt('Введите второе число, повторно!', '');
                    }
                    else {
                       break;
                    }
                }
            }

            let c = prompt('какое действие выполнить?', '');
            
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
                for (let i ; i !== null  ;  ) {
                   
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
                        i = prompt('ошибка ввода, повторите действие ("+" , "-" , "*" , "/") ','');
                        
                    } 
                }
            }

        }
        calc();  */

//КОНЕЦ ПЕРВАЯ ПРОБА КАЛЬКУЛЯТОР

//СТРЕЛОЧНАЯ ФУНКЦИЯ
        /*const sum = (a,b) => {
        return a + b;
        }
        */
        /* let test = calc(); */
        /* alert(test); */
        

       /*  function calcSum(a,b) {

            return a + b;
        }
        console.log(calcSum(3,3)) */
        
/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/

//РЕШЕНИЕ:

  /*   function twoWar(a,b) {
        if ( a >= 0 && b >= 0)
            return a - b;
        if ( a < 0 && b < 0)
            return a * b;
        return a + b;
    }
    console.log(twoWar(3,2));
    console.log(twoWar(-2,-3));
    console.log(twoWar(2,-3));
 */


    /* let a = 2;
    let b =  3;
    
    if ( a >= 0 && b >= 0) {
        alert(` a - b  = ${a - b}`)
    }
    if ( a < 0 && b < 0) {
        alert(` a * b  = ${a * b}`)
    }
    if ( a > 0 && b < 0 || b > 0 && a < 0) {
        alert(` a + b  = ${a + b}`)
    } */


/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/

//РЕШЕНИЕ:

     /* let a = ((Math.random() * 15).toFixed(0));
        switch (a) {
            case '1':
                console.log(1)
            case '2':
                console.log(2)
            case '3':
                console.log(3)
            case '4':
                console.log(4)
            case '5':
                console.log(5)
            case '6':
                console.log(6)
            case '7':
                console.log(7)
            case '8':
                console.log(8)
            case '9':
                console.log(9)
            case '10':
                console.log(10)
            case '11':
                console.log(11)
            case '12':
                console.log(12)
            case '13':
                console.log(13)
            case '14':
                console.log(14)
            case '15':
                console.log(15)
                break;
            
        } 
    console.log(a) */
    


/*  5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

//РЕШЕНИЕ:

     function sum(a,b) {
        return a + b;
    }

    function razn(a,b) {
        return a - b;
    }
    razn();

    function umn(a,b) {
        return a * b;
    }
    umn();

    function del(a,b) {
        return a / b;
    }
    del(); 


/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch). */

//РЕШЕНИЕ:

//ПРИМЕР №1

   /*  let arg1 = +prompt('Введите первое число' , '');
    let arg2 = +prompt('Введите второе число' , '');
    let operation = prompt('Введите знак + , - , * , / ', '');

    function mathOperation(arg1, arg2, operation) {
        switch (operation){
            case '+':
                alert(sum(arg1, arg2));
                break;
            case '-':
                alert(razn(arg1, arg2));
                break;
            case '*' :
                alert(umn(arg1, arg2));
                break;
            case '/':
                alert(del(arg1, arg2));
                break;
            default:
                alert('Знак введен не верно');
                break;
        }
        
    }

    mathOperation(arg1, arg2, operation);
     */
//ПРИМЕР №2
    function mathOperation(arg1, arg2, operation) {
        switch (operation){
            case '+':
                return sum(arg1,arg2);
                
            case '-':
                return razn(arg1,arg2)
               
            case '*' :
                return umn(arg1,arg2);
              
            case '/':
                return del(arg1,arg2);       
        } 
    }
   let testcalc = mathOperation();
  /* let b = '1' ;
  let c = '2';
  let a =  `' ${b} + ${c}' `
  let d = `' ${+b} + ${+c}'` 
  return b + c;
  d = a
  console.log(a) */


/* function addbits(s) {
    var total = 0;
    s = s.replace(/\s/g, '').match(/[+\-]?([0-9\.\s]+)/g) || [];
    while(s.length) total += parseFloat(s.shift());
    return total;
}
console.log(addbits('5 + 30')); */

//ПРЕВЩАЕМ СТРОКУ В МАССИВ
/* let func = (str) => {
    let arr = str.split("");
    return `'${Number(arr[0]) + parseInt(arr[1] + Number(arr[2]))}'`
};
    console.log(func("2+1")); */

    //ПРИМЕР 2
    function func(str){
        let arr = str.split(" ");
        switch(arr[1]){
            /* case '+':
                return sum(arg1,arg2);
                
            case '-':
                return razn(arg1,arg2) */
               
            case '*' :
                return `'${String(umn(arr[0],arr[2]))}'`;   
              
            case '/':
                return `'${String(del(arr[0],arr[2]))}'`;       
        } 
        
        return `'${Number(arr[0]) + parseInt(arr[1] + Number(arr[2]))}'`
        
    };
    console.log(func("10 * 5"));
   
    