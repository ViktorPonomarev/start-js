// Задача 1

// const productName = "Droid";
// const pricePerItem = 2000;

// console.log(productName);
// console.log(pricePerItem);

// Задача 2

// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem = 3500;

// console.log(productName);
// console.log(pricePerItem);
 
// Задача 3

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// Задача 4

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// Задача 5
/* Объяви перемнную message и запиши в неё сообщение о покупке, 
строку в формате: "You picked <имя товара>, price per item is <цена товара> 
credits". Где <имя товара> и <цена товара> это значения переменных 
productName и pricePerItem. Используй синтаксис шаблонных строк.*/

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName},
// price per item is ${pricePerItem} credits`
// console.log(message);

/*Задача 6
Магазин по продаже ремонтных дроидов готов к открытию, 
осталось написать скрипт для их заказа. Объяви переменные и присвой им 
соответствующие значения:

pricePerDroid - цена одного дроида, значение 800
orderedQuantity - количество дроидов в заказе, значение 6
deliveryFee - стоимость доставки, значение 50
totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
message - сообщение о состоянии заказа в формате 
"You ordered droids worth <total price> credits. 
Delivery (<delivery fee> credits) is included in total price." */

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;


// const message = `You ordered droids worth ${totalPrice} credits.
// Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

/*Задача 7 
 Объяви функцию sayHi, внутри которой добавь console.log() со строкой 
 "Hello, this is my first function!". После объявления вызови функцию sayHi.*/

// function sayHi() {
//     console.log("Hello, this is my first function!")
// }
// sayHi();

/*Задача 8 
Функция add должна уметь складывать три числа и выводить результат в консоль. 
Добавь функции add три параметра a, b и c, которые будут получать 
значения аргументов при её вызове.
Дополни console.log() так, чтобы он логировал строку "Addition result 
equals <result>", где <result> это сумма переданных чисел. */

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
  
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

/*Задача 9
Дополни код функции add так, чтобы она возвращала результат сложения 
значений трёх параметров a, b и c. */

// function add(a, b, c) {
  
//   return a + b + c;

// }

// add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

/*Задача 10
Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. 
Она объявляет два параметра, значения которых будут задаваться во время её вызова.

name - название товара
price - цена товара
Дополни код функции так, чтобы в переменную message записывалась строка 
"You picked <product name>, price per item is <product price> credits", 
где <product name> и <product price> это значения параметров name и price. 
Используй синтаксис шаблонных строк. */

// function makeMessage(name, price) {
// //   vol-1
//     console.log(`You picked ${name}, price per item is ${price} credits`);
//    return;
//     // vol-2
//        const message = `You picked ${name}, price per item is ${price} credits`;
//     console.log(message);
//     return message;
// }
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

/*Задача 11 
Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает 
два параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество единиц товара в заказе;
pricePerItem - цена одной единицы товара.
Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма 
покупки, результат умножения кол-ва товаров на цену одного. */

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
// //    vol 1
//     console.log(orderedQuantity * pricePerItem);
//     return;
// // vol 2
//     const totalPrice = orderedQuantity * pricePerItem;
//     console.log(totalPrice);
// return totalPrice;
// }
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

/*Задача 12 
Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и 
возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, 
значения которых будут задаваться во время её вызова.

orderedQuantity - количество дроидов в заказе
pricePerDroid - цена одного дроида
deliveryFee - стоимость доставки
Дополни код функции так, чтобы она возвращала сообщение о заказе в формате 
"You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) 
is included in total price.". Не забудь о цене доставки при вычислениях общей 
стоимости. */

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
//     console.log(totalPrice)
//     const message = `You ordered droids worth ${totalPrice} credits.
//     Delivery (${deliveryFee} credits) is included in
//         total price.`;
//     console.log(message);
//     return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 2000);

/*Задача 13
Функция isAdult объявляет один параметр age (возраст), значение которого будет 
задаваться во время её вызова. Присвой переменной passed выражение проверки 
возраста пользователя на совершеннолетие. Человек считается совершеннолетним в 
возрасте 18 лет и старше */
 
// function isAdult(age) {
//     const passed = (age >= 18);
//     console.log(passed);

// return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

/*Задача 14
Функция isValidPassword(password) проверяет равенство сохранённого и введённого 
паролей и возвращает результат проверки - буль true или false. Переменная 
SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль 
передаётся в параметр password.

Присвой переменной isMatch выражение проверки равенства введённого и сохранённого 
ранее паролей. Результатом выражения проверки должно быть true, если значения 
совпадают, и false, если нет. */

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   console.log(SAVED_PASSWORD);

//  const isMatch = SAVED_PASSWORD === password;
//   console.log(isMatch);
// return isMatch;
// }
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

/*Задача 15
Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в 
условие для инструкции if.

Если пользователь совершеннолетний, должен выполняться блок if и в переменную 
message записывается строка "You are an adult".
В противном случае должен выполняться блок else и записывается строка 
"You are a minor" */

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//       message = 'You are an adult';
//       console.log(message);
//   } else {
//       message = 'You are a minor';
//       console.log(message)
//   }

//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

/*Задача 16 
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и 
возвращает сообщение о результате. Она объявляет два параметра, значения которых будут 
задаваться во время её вызова:

available - общее количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе указано число, превышающее количество товаров на складе, в переменную 
message записывается строка "Not enough goods in stock!".
В противном случае записывается строка "Order is processed, 
our manager will contact you.". */

// function checkStorage(available, ordered) {
//   let message;
  
// if (available >= ordered) {
//     message = "Order is processed, our manager will contact you."
//     console.log(message);
// } else {
//     message = "Not enough goods in stock!"
//     console.log(message);
// }
  
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 30);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

/*Задача 17 
Замени выражения со стандартными математеческими операторами на комбинированный 
оператор присвоения с добавлением, вычитанием, умножением и делением. */

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);