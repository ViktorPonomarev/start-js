/*Задача  1
В функции может быть больше одного оператора return. Главное 
помнить, что выполнение функции прерывается когда интерпретатор
 встречает возврат, и весь код после него будет проигнорирован 
 в текущем вызове функции.

Возьмём уже знакомую нам функцию проверки совершеннолетия. Она 
работает, но здесь есть «лишний» код, то есть тело функции 
можно оптимизировать. В данном случае подойдёт приём (паттерн) 
«ранний возврат».

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "Вы совершеннолетний человек";
  } else {
    message = "Вы не совершеннолетний человек";
  }

  return message;
}
Если условие в if выполняется, то есть приводится к true, 
возвращаем строку "You are an adult" и код ниже уже не 
исполнится.
Если условие в if не выполняется, то есть приводится к false, 
возвращаем строку "You are a minor".
Используя паттерн «ранний возврат» и то, что выполнение функции 
прерывается на операторе return, мы избавляемся от лишней
 переменной и блока else. То есть этот приём помогает 
 «разгладить» ветвления.

Запиши условие в инструкции if так, чтобы функция работала 
правильно.*/

// function checkAge(age) {
//     if (age >= 18) {
//      console.log("You are an adult");
//     return "You are an adult";
//   }
//     console.log("You are a minor");
//     return "You are a minor";
    
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

/*Задача  2
Функция checkPassword получает пароль пользователя в параметр password, 
проверяет его на совпадение с паролем администратора в переменной 
ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkPassword используя паттерн 
«ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации*/

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  
//     if (password === ADMIN_PASSWORD) {
//         console.log("Welcome!");
//     return "Welcome!";
//     }
//     console.log("Access denied, wrong password!");
//    return "Access denied, wrong password!";
  
// }
// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

/*Задача  3
Функция checkStorage проверяет возможность оформления заказа и 
возвращает 
сообщение о результате. Она принимает два параметра, значения которых 
будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн 
«ранний возврат».*/

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//       console.log("Your order is empty!");
//     return("Your order is empty!");
    
//   }
//   if (ordered > available) {
//       console.log("Your order is too large, not enough goods in stock!");
//     return ("Your order is too large, not enough goods in stock!");
    
//   }
//     console.log("The order is accepted, our manager will contact you");
//   return("The order is accepted, our manager will contact you");
  
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

/*Задача  4
Объяви переменную fruits и присвой ей массив фруктов - 
строк "apple", "plum", "pear" и "orange".*/

// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

/*Задача  5*/

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

/*Задача  6
В отличии от строк, элементы массива можно изменять обратившись к ним 
по индексу и присвоив другое значение.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];
Переопредели значения элементов с индексами 1 и 3. Замени "plum" на 
"peach", а "orange" на "banana".*/

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";
// console.groupCollapsed(fruits);

/*Задача  7
Длина массива, то есть число его элементов, хранится в свойстве length.
 Это динамическая величина, которая изменяется автоматически при 
 добавлении или удалении элементов.

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits
 используя свойство length.*/

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = (fruits.length);
// console.table(fruitsArrayLength);

/*Задача  8
Чаще всего, мы заранее в коде не знаем какая будет длина массива. 
Для того, чтобы получить значение последнего элемента применяется 
следующий подход - длина массива всегда на единицу больше, чем индекс 
последнего элемента. Используя формулу длина_массива - 1 можно получить 
значение последнего элемента массива произвольной длины.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"
Объяви две переменные:

Имя переменной	Ожидаемое значение
lastElementIndex	Индекс последнего элемента масcива fruits через 
длина_массива - 1
lastElement	Значение последнего элемента массива*/

// const fruits = ["apple", "peach", "pear", "banana"];


// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex );
// console.log(lastElement);

/*Задача  9
Напиши функцию getExtremeElements(array) которая принимает один 
параметр array - массив элементов произвольной длины. Функция должна 
возвращать массив из двух элементов - первого и последнего элемента 
параметра array.*/

// function getExtremeElements(array) {
  
//     const newArray = [array[0], array[array.length - 1]];
//     console.log(newArray);
//     return newArray;
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

/*Задача  10
Метод split(delimeter) позволяет превратить строку в массив, «разбив» 
его по разделителю delimeter. Если разделитель это пустая строка, то 
получится массив отдельных символов. Разделителем может быть один или 
несколько символов.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]
Дополни код функции splitMessage(message, delimeter) так, чтобы она 
возвращала в переменной words результат разделения строки message по 
разделителю delimeter - массив строк.*/

// function splitMessage(message, delimeter) {
//   let words = message.split(delimeter);
//     console.log(words);
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

/*Задача  11
Сервису гравировки украшений нужна функция, которая бы автоматически 
считала цену гравировки, в зависимости от количества слов и цены за 
слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта 
функция принимает строку, состоящую из слов разделённых только пробелами
 (параметр message) и цену гравировки одного слова (параметр 
    pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки 
всех слов в строке.*/

// function calculateEngravingPrice(message, pricePerWord) {
   
// let word = message.split(" ");
// const wordLength = word.length;
// const totalPrice = wordLength * pricePerWord;
// console.log(totalPrice);
// return totalPrice;

// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20)

/*Задача  12
Метод массивов join(delimeter) позволяет соединить элементы массива в 
строку. В строке элементы будут разделены символом или группой символов
 указанных в delimeter. То есть это операция обратная методу строк 
 split(delimeter).

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'

Дополни код функции makeStringFromArray(array, delimeter) так, 
чтобы она возвращала в переменной string результат соединения элементов 
массива array c разделителем delimeter - строку.*/

// function makeStringFromArray(array, delimeter) {
//   let string = array.join(delimeter);
//       console.log(string);
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

/*Задача  13
Термин slug - это человеко-понятный уникальный идентификатор, который 
используется в веб-разработке для создания читабельных URL-адесов.

Например, вместо того чтобы пользователь увидел в адресной строке 
mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. 
В результате адрес получится более приятным для восприятия: 
mysite.com/posts/arrays-for-begginers.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, 
параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены 
только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире*/

// function slugify(title) {
//     const slugify = 'Arrays for begginers';
// const slugLowerCase = slugify.toLowerCase();
// const slug = slugLowerCase.split(' ');
// console.log(slug.join('-'));

// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

/*Задача  14
Метод slice(begin, end) возвращает новый массив, содержащий копию 
части исходного массива, не изменяя его. Копия делается от begin и 
до, но не включая, end - индексы элементов исходного массива.

Если begin и end не указаны, будет создана полная копия исходного 
массива.
Если не указан end, копирование будет от start и до конца исходного 
массива.
Если значение start отрицательное, а end не указан, то будут 
скопированы последние N элементов.
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
Дополни код так, чтобы переменные содержали частичные копии исходного 
массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов*/

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

/*Задача  15
Метод concat используется для объединения двух или более массивов. 
Он не изменяет массив на котором вызывается, а возвращает новый. 
Порядок аргументов метода влияет на порядок элементов нового массива.

const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Дополни код так, чтобы в переменной allClients получился массив всех 
элементов массивов oldClients и newClients.*
/
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

/*Задача  16
Напиши функцию makeArray(firstArray, secondArray, maxLength) для 
создания нового массива со всеми элементами двух исходных firstArray 
и secondArray. Параметр maxLength содержит максимально допустимую 
длину нового массива.

Если количество элементов нового массива больше maxLength, функция 
должна вернуть копию массива длиной maxLength элементов. В противном 
случае функция должна вернуть новый массив целиком.*/

// function makeArray(firstArray, secondArray, maxLength) {
// Vol-1
//   return firstArray.concat(secondArray) >= maxLength ?
//      array = firstArray : firstArray.concat(secondArray).slice(0, maxLength);
// Vol-2
// let array = [];
//     if (firstArray.concat(secondArray) >= maxLength) {
//         array.push(firstArray);
//         console.log(array);
//         return;
//     }
    
//     return array = firstArray.concat(secondArray).slice(0, maxLength);
    // Vol-3
//     let newArray = firstArray.concat(secondArray);

//     if (newArray.length > maxLength) {
//         newArray = newArray.slice(0, maxLength);
//     }
//     console.log(newArray)
//     return newArray;
//   }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

/*Задача  17
Циклы используются для многократного повторения кода. Объявление цикла for 
состоит из трёх выражений.

for (Инициализация; Условие; Пост - выражение) {
  // Тело цикла
}
Инициализация - выполняется один раз перед началом цикла. Используется для 
создания переменной-счётчика и указания её начального значения.
Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. 
Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл 
завершается, если значение будет false.
Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой 
условия. Используется для обновления переменной-счётчика.
Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если 
выражение условия приводится к true.
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
В примере объявляется переменная i, инициализируется значением 0 и цикл 
выполняется (его тело) до тех пор, пока i <= 20, то есть условие приводится к 
true. После каждой итерации счётчик увеличивается на 5.

Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start 
до end включительно.*/

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

/*Задача  18
Напиши функцию calculateTotal(number), которая принимает целое число (параметр 
    number) и возвращает сумму всех целых чисел от единицы и до этого числа. 
    Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.*/

// function calculateTotal(number) {
 
//  let total = 0;

// for (let i = 0; i <= number; i += 1) {
//     total += i;
//     }

//     console.log(total);
//   return total;
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);


/*Задача  19
Цикл for можно использовать для итерации по массиву, то есть «перебрать» его 
поэлементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], 
где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, 
который на единицу меньше длины массива.

Дополни код цикла for так, чтобы он последовательно логировал все элементы массива
 fruits.*/

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

/*Задача  20
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order 
- массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов
 должна сохраняться в переменной total, которая возвращается, как результат работы
  функции.*/

// function calculateTotalPrice(order) {
 

//   let total = 0;
 
//   for (let i = 0; i < order.length; i += 1) {
// total += order[i];
// }
//     console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
  

/*Задача  21
Напиши функцию findLongestWord(string) которая принимает произвольную строку 
состоящую только из слов разделённых пробелом (параметр string) и возвращает самое 
длинное слово в этой строке.*/

// function findLongestWord(string) {
  
//   const splitString = string.split(' ');
//   let bigWord = splitString[0];
  
//   for (let i = 0; i < splitString.length; i += 1) {
    
//     if (splitString[i].length > bigWord.length) {
//       bigWord = splitString[i];

//     }
//   }
//     console.log(bigWord);
// return bigWord;

// }
  
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("May the force be with you");
// findLongestWord("Google do a roll");

/*Задача  22
Метод push() позволяет добавить один или несколько элементов в конец массива, 
без необходимости указывать индексы добавляемых элементов.

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 
'Uranus', 'Neptune']
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала 
массив всех целых чисел от значения min до max.*/

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
 
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
//     console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

 
/*Задача  23
Напиши функцию filterArray(numbers, value), которая принимает массив чисел 
(параметр numbers) и возвращает новый массив, в котором будут только те элементы
 массива numbers, которые больше чем значение параметра value (число).*/

// function filterArray(numbers, value) {
  
// const elements = [];

// for (const item of numbers) {
//   console.log(item);
//   if (item > value) {
//     elements.push(item);
//   }
//     }
//     console.log(elements);
// return elements;
  
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


/*Задача  24
Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), 
и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.*/

// function checkFruit(fruit) {

//     const fruits = ["apple", "plum", "pear", "orange"];
    
//     console.log((fruits.includes(fruit))? true : false);
//   return (fruits.includes(fruit))? true : false;
// }

// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");

/*Задача 25
Общими элементами массивов называют те элементы, которые присутствуют во всех 
массивах.

Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. 
они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только 
в одном из массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива 
произвольной длины в параметры array1 и array2, и возвращает новый массив, 
состоящий из тех элементов, которые присутствуют в обоих исходных массивах.*/

// function getCommonElements(array1, array2) {
//  const newArray = [];

//     for (let i = 0; i < array1.length; i += 1) {

//         if (array2.includes(array1[i])) {
//     newArray.push(array1[i]);
//   }
// }
//     console.log(newArray);
// return newArray;
 
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

/*Задача  26
Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как 
массивы и строки. Тело цикла будет выполняться для значения каждого элемента. 
Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации
iterable — коллекция, которая имеет перечислимые элементы, например массив
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на 
for...of.*/

// function calculateTotalPrice(order) {
//     let total = 0;
    

//     for (const item of order) {
//         total += item;
//     }

//     console.log(total);
//     return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

/*Задача  27
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на 
for...of.*/

// function filterArray(numbers, value) {
 
//   const filteredNumbers = [];

//   for (const number of numbers) {
//   if (number > value)filteredNumbers.push(number);

//   }
//     console.log(filteredNumbers);
//       return filteredNumbers;
  
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

/*Задача  28

Вместо того, чтобы возвращать результат деления, операция по модулю (%) 
возвращает целочисленный остаток от деления двух чисел - делимого и делителя.

5 % 1 = 0;
// 5, разделенное на 1, равно 5, а остаток - 0

5 % 2 = 1;
//  5, разделенное на 2, равно 2, а остаток - 1

5 % 3 = 2;
//  5, разделенное на 3, равно 1, а остаток - 2

5 % 4 = 1;
//  5, разделенное на 4, равно 1, а остаток - 1

5 % 5 = 0;
//  5, разделенное на 5, равно 1, а остаток - 0
Дополни выражения остатка от деления так, чтобы код проходил тесты.

Объявлена переменная a
Значение переменной a это число 0
Объявлена переменная b
Значение переменной b это число 1
Объявлена переменная c
Значение переменной c это число 3
Объявлена переменная d
Значение переменной d это число 5
Объявлена переменная e
Значение переменной e это число 2*/

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

/*Задача  29
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных 
чисел от start до end. Чётным считается число которое делится на 2 без остатка 
(10 % 2 === 0).*/

// function getEvenNumbers(start, end) {
   
// let newArray = [];

// for (let i = start; i <= end; i += 1) {
//   if (i % 2 === 0) {
//     newArray.push(i);
//   }
// }
//     console.log(newArray);
// return newArray;
    
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

/*Задача  30

Прервать выполнение цикла можно в любой момент. Для этого существует оператор
 break, который полностью прекращает выполнение цикла и передаёт управление на 
 строку за его телом.

В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё
выполнение (будет прерван).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");

Дополни код так, чтобы в переменную number записывалось первое число от start 
до end, которое делится на 5 без остатка.
Объявлена переменная start со значением 6
Объявлена переменная end со значением 27
Объявлена переменная number без инициализации
Итоговое значение переменной number равно 10
В цикле for используется break для выхода до завершения всех итераций цикла*/

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

/*Задача  31

Если цикл находится в теле функции, то оператор break не прекращает выполнение 
функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и 
функции есть оператор return.

В примере ищем число 3. Как только выполнится условие if, делаем возврат, который 
прервёт выполнение цикла и функции.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
      return i;
    }
  }

  // Этот console.log не выполнится
  console.log("Лог после цикла в теле функции");
}

const result = fn();
console.log("Лог после выхода из функции");
console.lof(`Результат выполнения функции ${result}`);
Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

возвращала первое число от start до end, которое делится на divisor без остатка
не использовала оператор break
не использовала переменную number
Объявлена функция findNumber(start, end, divisor)
Вызов findNumber(2, 6, 5) возвращает 5
Вызов findNumber(8, 17, 3) возвращает 9
Вызов findNumber(6, 9, 4) возвращает 8
Вызов findNumber(16, 35, 7) возвращает 21
Вызов findNumber() со случайным набором чисел возвращает верный результат
В цикле for не должен использоваться break для выхода до завершения всех итераций 
цикла*/

// function findNumber(start, end, divisor) {
  
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//         number = i;
//         console.log(number);
//     return number;
//     }
//   }
// }

// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);


/*Задача  32

Напиши функцию includes(array, value), которая делает тоже самое, что и метод 
массива массив.includes(значение) - проверяет, есть ли в массиве array значение
 value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод 
массив.includes(значение).

Объявлена функция includes(array, value)
Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") 
возвращает true
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
 возвращает false
Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
Вызов includes() для случайного массива со случайным value возвращает верный
 boolean
В функции includes используется for, return, но не метод массива includes*/

// function includes(array, value) {
  
// for (let i = 0; i < array.length; i++) {
    
//     if (array[i] === value) {
        
//         console.log(true);
//     return true;
//   }
//     } console.log(false);
//     return false;
  
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");