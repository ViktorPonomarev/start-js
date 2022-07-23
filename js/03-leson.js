/*Задача  1
Объекты позволяют описать и сгруппировать характеристики объектов реального мира -
 пользователя, книги, продукта магазина, чего угодно. Объекты ещё называют 
 словарями, то есть они содержат термины (свойства) и их определения (значения).

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};
Для объявления используются фигурные скобки {} - литерал объекта. При создании 
объекту можно добавить свойства, каждое из которых описывается парами ключ:значение.
 Ключ ещё называют именем свойства и это всегда строка. Значением свойства могут 
 быть любые типы: примитивы, массивы, объекты, були, функции и т. п. Свойства 
 разделяются запятой.

Присвой переменной apartment объект описывающий квартиру со следующими 
характеристиками:

imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"].*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


/*Задача  2

Значением свойства может быть другой объект. Это используется для хранения 
вложенных и группированных данных.

Например, статистика пользователя социальной сети состоит из количества 
последователей, просмотров и лайков, и хранить эти данные удобнее всего в 
виде объекта. Тоже самое с местоположением, отдельно страна и город.

В будущем это можно будет использовать для поиска пользователей по стране, 
городу, минимальному или максимальному количеству последователей и т. д.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
Дополни объект квартиры свойством owner, значением которого будет объект с 
информацией о владельце. Добавь ему следующие свойства:

name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com".
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, 
price и tag со значениями
В объекте apartment есть свойство owner
Значение свойства owner это объект
В объекте owner есть свойство name
Значение свойства name это "Henry"
В объекте owner есть свойство phone
Значение свойства phone это "982-126-1588"
В объекте owner есть свойствао email
Значение свойства email это "henry.carter@aptmail.com"*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };


/*Задача  3*/

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const apartmentRating = apartment.rating;
console.log(apartmentRating);

const apartmentDescr = apartment.descr;
console.log(apartmentDescr);

const apartmentPrice = apartment.price;
console.log(apartmentPrice);

const apartmentTags = apartment.tags;
console.log(apartmentTags);

/*Задача  4*/
/*Задача  5*/
/*Задача  6*/
/*Задача  7*/
/*Задача  8*/
/*Задача  9*/
/*Задача  10*/
/*Задача  11*/
/*Задача  12*/
/*Задача  13*/
/*Задача  14*/
/*Задача  15*/
/*Задача  16*/
/*Задача  17*/
/*Задача  18*/
/*Задача  19*/
/*Задача  20*/
/*Задача  21*/
/*Задача  22*/
/*Задача  23*/
/*Задача  24*/
/*Задача  25*/
/*Задача  26*/
/*Задача  27*/
/*Задача  28*/
/*Задача  29*/
/*Задача  30*/
/*Задача  31*/
/*Задача  32*/
/*Задача  33*/
/*Задача  34*/
/*Задача  35*/
/*Задача  36*/
/*Задача  37*/
/*Задача  38*/
/*Задача  39*/
/*Задача  40*/
/*Задача  41*/
/*Задача  42*/