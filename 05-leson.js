
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
  // Функція `deleteElement()` видаляє всі входження елемента з 
  //заданого масиву.
  // let arr = [23,56,4,78,5,63,45,210,56];
  // arr = deleteElement(arr, 56)
  //
  // console.log(arr); //[23, 4, 78, 5, 63, 45, 210]\

  
//   function calcTotalPrices (stones, stoneName) {
//     const {price, quantity} = stones.filter(el => el.name === stoneName)[0];
//     return price * quantity;
// }

// console.log(calcTotalPrices(stones, 'Diamond'))



// / Напишіть код JS, щоб видалити всі елементи в заданому масиві
//   // Функція `deleteElement()` видаляє всі входження елемента з заданого масиву.
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

