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

    let arg1 = +prompt('Введите первое число' , '');
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