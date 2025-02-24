let a = 2
let b =  3.14
let c = 'da'
let d = true

console.log(`${typeof a}, ${typeof b} , ${typeof c} , ${typeof d}`)
console.log(`numberInt = ${a}, numberFloat = ${b}, text = ${c}, isTrue = ${d}`)

a = "2" 
b = 3
c = 3.14
d = false

console.log(`numberInt = ${a}, тип: ${typeof a}`);
console.log(`numberFloat = ${b}, тип: ${typeof b}`);
console.log(`text = ${c}, тип: ${typeof c}`);
console.log(`isTrue = ${d}, тип: ${typeof d}`);



let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let num3 = parseFloat(prompt("Введіть третє число:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Помилка: введені значення не є числами!");
  }
  else {
    let num4 = (num1+num2+num3)/3
    console.log(`Середнє арифметичне: ${num4}`);
console.log("операції над числами:");
console.log(`Піднесення до степеня: ${num4**num1}`);
  console.log(`Модуль першого числа: ${Math.abs(num1)}`);
  console.log(`Модуль другого числа: ${Math.abs(num2)}`);
  console.log(`Модуль третього числа: ${Math.abs(num3)}`);

  console.log(`Округлення першого числа вгору: ${Math.ceil(num1)}`);
  console.log(`Округлення другого числа вгору: ${Math.ceil(num2)}`);
  console.log(`Округлення третього числа вгору: ${Math.ceil(num3)}`);

  console.log(`Округлення першого числа вниз: ${Math.floor(num1)}`);
  console.log(`Округлення другого числа вниз: ${Math.floor(num2)}`);
  console.log(`Округлення третього числа вниз: ${Math.floor(num3)}`);

  function isDivisible(num, divisor) {
    return num % divisor === 0 ? ` Так, ділиться на ${divisor}` : ` Ні, не ділиться на ${divisor}`;
  }


if (num4 % 5 === 0) {
    console.log(`${num4} ділиться на 5 без остачі`);
} else {
    console.log(`${num4} не ділиться на 5`);
}

if (num4 % 7 === 0) {
    console.log(`${num4} ділиться на 7 без остачі`);
} else {
    console.log(`${num4} не ділиться на 7`);
}
}



let num4 = parseFloat(prompt("Введіть число:"));
let num5 = parseFloat(prompt("Введіть число:"));
let num6 = parseFloat(prompt("Введіть число:"));

let max = Math.max(num4, num5, num6);
let min = Math.min(num4, num5, num6);

let chmo = num4%2===0||num5%2===0||num6%2===0
  
console.log(`Найбільше число: ${max}`);
console.log(`Найменше число: ${min}`);
console.log(`Найбільше число: ${max}\nНайменше число: ${min}\nЧи є парне число? ${chmo ? "Так" : "Ні"}`);

let neoke = (num4 > num5) && (num5 < num6);
console.log(`Перевірка умови ${neoke}`);
console.log(`Перевірка умови: ${neoke ? "True" : "False"}`);

let proste = parseInt(prompt("Введіть число для перевірки на простоту:"));




let imya = prompt("Введіть ім'я:");
let prizvitse = parseInt(prompt("Введіть рік народження:"));
let micto = prompt("Ведіть місто проживання:");

let tuda = 2024-prizvitse
 
    let ti;
if(tuda<12){
    ti = "дитина";
} else if (12<tuda && tuda<18) {
    ti = "підліток";
} else if (18<tuda  && tuda<50){
    ti = "дорослий";
} else { 
    ti = "літня людина"
}


et capitals = {
    Ukraine: "Kyiv",
    Spain: "Madrid"
 };
 
 let misto = "Kyiv"
 let couName = null;
 for (let cou in capitals) {
     if (capitals[cou] === misto) {
 couName = cou;
 break;
     }
 }
 if (couName) {
     console.log(${city} - столиця ${couName}.);
 } else {
  console.log(${misto} - не столиця.)
 };


console.log(`Привіт, ${imya}! Вам ${tuda} років, ви належите до вікової групи "${ti}".`);




// контролюючі питання 


