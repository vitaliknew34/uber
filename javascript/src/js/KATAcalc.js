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

function romanize(num) {//ПРЕОБРАЗОВАНИЯ АРАБСКОГО В РИМСКОЕ
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


function func(str){
    let arr = str.split(" ");
    let resultate = sum(Number(arr[0]),Number(arr[2]));
    if (!isNaN(arr[0]) && isNaN(arr[2]) || 
         isNaN(arr[0]) && !isNaN(arr[2])) {
        throw "throws Error!"
    }
    if (isNaN(arr[2]) && isNaN(arr[0])) {//РИМСКИЙ ОТВЕТ
    //ПРИМЕНЯЕМ К РИМСКИМ ЧИСЛАМ ЗАГОТОВКУ нулевого или отрицательного значения
        if (arr[0] < arr[2] && arr[1] == '-' || 
            arr[0] == arr[2] && arr[1] == '-' ) {
            
            return "''";
        }
        switch(arr[0]) {
        case 'I':
            arr[0] = 1;
            break; 
        case 'II':
            arr[0] = 2;
            break;
        case 'III':
            arr[0] = 3;
            break;
        case 'IV':
            arr[0] = 4;
            break;
        case 'V':
            arr[0] = 5;
            break;
        case 'VI':
            arr[0] = 6;
            break;
        case 'VII':
            arr[0] = 7; 
            break;                
        case 'VIII':
            arr[0] = 8;
            break;
        case 'IX': 
            arr[0] = 9;
            break;
        case 'X':
            arr[0] = 10;
            break;
        default: 
            throw "throws Error!";
        }
    
        switch(arr[2]) {
        case 'I':
            arr[2] = 1;
            break; 
        case 'II':
            arr[2] = 2;
            break;
        case 'III':
            arr[2] = 3;
            break;
        case 'IV':
            arr[2] = 4;
            break;
        case 'V':
            arr[2] = 5;
            break;
        case 'VI':
            arr[2] = 6;
            break;
        case 'VII':
            arr[2] = 7;
            break;                 
        case 'VIII':
            arr[2] = 8;
            break;
        case 'IX': 
            arr[2] = 9;
            break;
        case 'X':
            arr[2] = 10;
            break;
        default: 
            throw "throws Error!";
        }

        switch(arr[1]){
            case '+':
                return  `'${romanize(sum(arr[0],arr[2]))}'` ;
            case '-':
                return`'${romanize(razn((arr[0]),(arr[2])))}'`;
            
            case '*' :
                return `'${romanize(umn(arr[0],arr[2]))}'`;   
            
            case '/':
                return `'${romanize(Math.trunc((del(arr[0],arr[2]))))}'`;   
            default: 
            throw "throws Error!";
        }
           
    }
   
    else if(!isNaN(arr[0]) && !isNaN(arr[2])){//АРАБ ОТВЕТ
        if (arr.length > 3 || // Если количество элементов массива больше 3
        arr[0] % 1 !== 0 || // ПРОВЕРКА arr[0] НА ЦЕЛОЕ ЧИСЛО
        arr[2] % 1 !== 0 || // ПРОВЕРКА arr[2] НА ЦЕЛОЕ ЧИСЛО
        arr[0] <= 0  ||  
        arr[0] > 10 || 
        arr[2] <= 0 || 
        arr[2] > 10 ) {
        throw "throws Error!";
    }
        switch(arr[1]){
            case '+':
                return `'${(Number(resultate))}'` ;
                
            case '-':
                return`'${(razn((arr[0]),(arr[2])))}'`;
            
            case '*' :
                return `'${(umn(arr[0],arr[2]))}'`;   
            
            case '/':
                return `'${Math.trunc((del(arr[0],arr[2])))}'`;   
                
            default: 
            throw "throws Error!";
        }
        
    }
   
};

console.log( func("2 + 5"));
console.log(typeof(func("I - V")));
