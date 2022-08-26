
// Напишіть функцію, яка створює новий масив із заданими
//значеннями

// const data = 3;
// const valueToFill = 'a';
// console.log(fillArray(data, valueToFill)) // ['a', 'a', 'a']

// function fillArray(data, valueToFill) {
//   const result = [];
// for (let i = 0; i < data; i += 1) {
//   result.push(valueToFill);
// }
// return result;
// };




// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//  };



// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.


// Напишіть функцію, яка створює новий масив із заданими
//значеннями
//
// const data = 3;
// const valueToFill = 'a';
// console.log(fill(data, valueToFill)) // ['a', 'a', 'a']



// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// multiplyNumeric(menu);

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


// function checkObject(value) {
  
//   if (value === null) {
//     console.log(null);
//     return null;
//   }
//   else if (Array.isArray(value)) {
//     // console.log('array');
//     console.log('array');
//   }
//   else if(typeof value === 'object'){
//     console.log('object');
//   }
  
// }
// checkObject({a:1});
// checkObject([2]);
// checkObject(null);
// checkObject(2);



//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0




//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };


// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// //v.1
// // const totalSalary = obj => {
// //   let total = 0;

// //   for (const key in obj) {
// //     total += obj[key];
// //   }
// //   console.log(total);
// // };

// //v.2
// // const totalSalary = obj => {
// //   let total = 0;

// //   for (let value of Object.values(obj)) {
// //     total += value;
// //   }

// //   console.log(total);
// // };


// // v.3
// const totalSalary = obj => {
//   const values = Object.values(obj);

//   return values.reduce((total, value) => total + value, 0);
// };

// console.log(totalSalary(salaries));





// Потрібно написати функцію, яка приймає 1 параметр key,
//яка буде перебирати об'єкт
// якщо об'єкт має такий ключ - поверне true

// const obj = {
//   name: 'Jhon',
//   car:  'Audi',
//   carColor: 'White'
//

// const obj = {
//   name: "Jhon",
//   car: "Audi",
//   carColor: "White",
// };

// function findKey(key) {

//     return key in obj;


// //   const keys = Object.keys(obj);
// //     console.log(keys);
    
// //   for (const evt of keys) {
// //     if (key === evt) {
// //       return true;
// //     }
// // }
 
// //     return false;
// }
// console.log(findKey("ccc"));



//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям


// function calcTotalPrices (stones, stoneName) {
//     const {price, quantity} = stones.filter(el => el.name === stoneName)[0];
//     return price * quantity;
// }

// console.log(calcTotalPrices(stones, 'Diamond'))



// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 6 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 150, quantity: 100 },
// ];


// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 6 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   let sum = 0;

//   stones.forEach((element) => {
//     const { name, price, quantity } = element;
//     if (name === stonesName) {
//       sum = price * quantity;
//     }
//   });
//   return sum;
// }

// console.log(calcTotalPrice(stones, `Diamond`));


// Напишіть код JS, щоб видалити всі елементи в заданому масиві
//   Функція `deleteElement()` видаляє всі входження елемента з
//   заданого масиву.
//   let arr = [23,56,4,78,5,63,45,210,56];
//   arr = deleteElement(arr, 56)
  
//   console.log(arr); //[23, 4, 78, 5, 63, 45, 210]\

  
//   function calcTotalPrices (stones, stoneName) {
//     const {price, quantity} = stones.filter(el => el.name === stoneName)[0];
//     return price * quantity;
// }

// console.log(calcTotalPrices(stones, 'Diamond'))



// / Напишіть код JS, щоб видалити всі елементи в заданому масиві
  // Функція `deleteElement()` видаляє всі входження елемента з заданого масиву.
//   let arr = [23,56,4,78,5,63,45,210,56];
  
//   //
//   // console.log(arr); //[23, 4, 78, 5, 63, 45, 210]\

// function deleteElement(arr, deleteValue) {
//     const newArr = [...arr];
//     for (let i = 0; i <= newArr.length; i += 1) {
//         if (newArr[i] === deleteValue) {
//             newArr.splice(i, 1);
//         }
        
//     }
//     return newArr;
// }
// console.log(deleteElement(arr, 56));
// console.log(arr);


// !
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.


// function saveDiscount(discount) {
//   return function  (price) {
//     return price - (price * discount);
//   }
// }
// const callacDiscont = saveDiscount(0.1);
// console.log(callacDiscont(100));

// !
// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає функцію зворотного виклику
//greet(name) - колбек, який приймає ім'я і виводить в консоль
//рядок "Привіт <name>"
//Реалізуй перевірку, чи name не пустий рядок



// function letMeSeeYourName(callback) {
//   let name = prompt("Enter your name");
//   // console.log(name.length);
//   if (name.trim().length === 0) {
//     alert("Введіть ваше ім'я");
//     window.location.reload();
//   } else {
//     callback(name);
//   }
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);


// !

//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// const PASSWORD = '1245';

// function savePassword(password){
// return function(newPassword){
//     return password === newPassword;
// }
// }

// const checkPassword = savePassword(PASSWORD);
// console.log(checkPassword('1245'));

// !
// // Виконай рефакторинг makeDish так, щоб не потрібно було
// // щоразу передавати ім'я шефа.
// // Напишіть функцію makeShef(shefName), яка повертає функцію
// // makeDish(dish), що пам'ятає ім'я шефа при її виклику

// // const makeDish = function (shefName, dish) {
// //   console.log(`${shefName} is cooking ${dish}`);
// // };

// // makeDish("Mango", "apple pie");
// // makeDish("Poly", "muffins");
// const makeShef = function (shefName) {
//   // console.log(`${shefName}`);

//   function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   }
//   makeDish("apple pie");
//   makeDish("muffins");
// };
// const mainShef = makeShef("Mango");
// // mainShef("apple pie");

// const makeSecondDish = makeShef("Poly");
// // makeSecondDish("muffins");
// // console.log("result: ", result);
// // console.log('makeDish("Mango"): ', makeShef("Mango"));



//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() перемножує збережені значення та повертає результат і враховується ділення на 0

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   min() {},
//   mult() {},
//   div() {},
// };
// Напиши клас Client який створює об'єкт
//з властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
//Напиши клас Notes, який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text priority
//Додай класу статичну властивість Priopity,
//у якій зберігатиметься об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// Задача 1
// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = ['car', 'grass', 'avatar', 'user', 'sea', 'water', 'bird'];
// const baseUrl = 'domain-name.com';
// let uploadedFiles = [];
//
// const resultUploadedFiles = [
//   'domain-name.com/upload/car',
//   'domain-name.com/upload/grass',
//   'domain-name.com/upload/avatar',
//   'domain-name.com/upload/user',
//   'domain-name.com/upload/sea',
//   'domain-name.com/upload/water',
//   'domain-name.com/upload/bird'
// ];

// imagesName.forEach(function (item) {
//   uploadedFiles.push(this + '/upload/' + item);
// }, baseUrl);



// Задача 2
// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) -
// ключ, значення(axios)

// url = https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311

// const url = 'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';

// const index = url.indexOf('?');
// const newUrl = url.slice(index + 1);

// const finalArr = newUrl.split('&').reduce((acc, item) => {
//   const [key, value] = item.split('=');
//   acc[key] = value;

//   return acc;
// }, {});

// console.log(finalArr);


// Задача 4

// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const product1 = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// }
//
// const product2 = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// }
//
//
// const basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   }
// ];


// Задача 5

// Напишіть функцію, яка очищає масив від небажаних значень,
// таких як false, undefined, порожні рядки, нуль, null.
// Очікуваний результат: [0, 1, false, 2, undefined, '',
// 3, null] => [1, 2, 3]


// function cleanArray(arr) {
// //  return arr.filter(item => !item === false);
// // return arr.filter(item => item);
// return arr.filter(Boolean);
// }
// console.log(cleanArray([0, 1, false, 2, undefined, '', 3, null]))


// Задача 6


// Перетворіть масив об’єктів виборців на підрахунок кількості людей, які проголосували

// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];



// function totalVotes(arr) {
//   return arr.reduce((acc, {voted}) => {
//     if ( voted ) {
//       acc = acc + 1;
//     }
//      return acc;
//   }, 0)
 
// }

// console.log(totalVotes(voters)); // 7



// Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них.
//  Скоротіть назву та поверніть ініціали імені.

// const input = 'George Raymond Richard Martin';

// // Result
// // 'GRRM'
 

// const res = input
//   .split(' ')
//   .map(item => item[0])
//   .join('');
// console.log(res);





// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e



// const input = 'Every developer likes to mix kubernetes and javascript';
// Result
// 'E3y d7r l3s to mix k8s and j8t'


// const input = 'Every developer likes to mix kubernetes and javascript';
// // Result
// // 'E3y d7r l3s to mix k8s and j8t'

// function calcLetters(word) {
//   return word.length - 2;
// }

// const res = input
//   .split(' ')
//   .map(item => {
//     if (item.length < 4) {
//       return item;
//     } else {
//       return `${item[0]}${calcLetters(item)}${item[item.length - 1]}`;
//     }
//   })
//   .join(' ');
// console.log(res);
