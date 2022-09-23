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


/*Задача  3

Первый способ получить доступ к свойству объекта это синтаксис 
обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве 
случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства 
к которому хотим получить доступ.

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined
Дополни код присвоив объявленным переменным выражения обращения к соответствующим
 свойствам обьекта apartment.

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const apartmentRating = apartment.rating;
// console.log(apartmentRating);

// const apartmentDescr = apartment.descr;
// console.log(apartmentDescr);

// const apartmentPrice = apartment.price;
// console.log(apartmentPrice);

// const apartmentTags = apartment.tags;
// console.log(apartmentTags);


/*Задача  4
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};
Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например,
 если необходимо получить значение страны пользователя, записываем user.location.country,
  где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.
  country обращение к свойству country в этом объекте. То есть, «точка» указывает следующую 
  вложенность.

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // "Jamaica"
Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому 
массиву. Далее, можно получить доступ к его элементам через квадратные скобки и индекс 
или использовать свойства и методы.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3
Дополни код присвоив объявленным переменным выражения обращения к соответствующим 
свойствам обьекта apartment.

ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags.
Объявлена переменная apartment с помощью const
Значение переменной apartment это объект
Объявлена переменная ownerName с помощью const
Значение переменной ownerName это строка "Henry"
Объявлена переменная ownerPhone с помощью const
Значение переменной ownerPhone это "982-126-1588"
Объявлена переменная ownerEmail с помощью const
Значение переменной ownerEmail это "henry.carter@aptmail.com"
Объявлена переменная numberOfTags с помощью const
Значение переменной numberOfTags это 3
Объявлена переменная firstTag с помощью const
Значение переменной firstTag это "premium"
Объявлена переменная lastTag с помощью const
Значение переменной lastTag это "top"*/

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
//   },
// };



// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[2];
// console.log(lastTag);


/*Задача  5
Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"].
 Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не 
 индекс элемента, а имя свойства как строка.

Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда 
имя свойства заранее неизвестно или оно хранится в переменной (как значение параметра 
  функции, например).

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book["genres"];
console.log(bookGenres); // ["historical prose", "adventure"]

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // "Bernard Cornwell"
Дополни код присвоив объявленным переменным выражения обращения к соответствующим 
свойствам 
обьекта apartment используя синтаксис «квадратных скобок».

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment["rating"];
// console.log(aptRating);
// const aptDescr = apartment["descr"];
// console.log(aptDescr);
// const aptPrice = apartment["price"];
// console.log(aptPrice);
// const aptTags = apartment["tags"];
// console.log(aptTags);

/*Задача  6
После того, как объект создан, значение его свойств можно изменить. Для этого 
необходимо обратиться к ним по имени, например, «через точку», и присвоить новое
значение.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]
Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted".*/

//  const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// console.log(apartment.price);
// apartment.rating = 4.7;
// console.log(apartment.rating);
// apartment.owner.name = "Henry Sibola";
// console.log(apartment.owner.name);
// apartment.tags.push("trusted");
// console.log(apartment.tags);


/*Задача  7

Операция добавления нового свойства после создания объекта ничем не отличается от 
изменения значения уже существующего свойства. Если при записи значения по имени, 
такого свойства в объекте нет, оно будет создано.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston".*/


// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
    
//   },
//    };

// apartment.area = 60;
// console.log(apartment.area);
// apartment.rooms = 3;
// console.log(apartment.rooms);
// apartment.location = { country: "Jamaica", city: "Kingston" };
// console.log(apartment.location);


/*Задача  8
Иногда, при создании объекта, значение свойства необходимо взять из переменной или 
параметра функции с таким же именем, как и само свойство.

Синтаксис в следующем примере слишком громоздкий, потому что приходится дублировать
имя свойства и имя переменной, в которой хранится необходимое значение.

const name = "Генри Сибола";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
Синтаксис коротких свойств (shorthand properties) решает эту проблему, позволяя 
использовать имя переменной как имя свойства, а её значение как значение свойства.

const name = "Генри Сибола";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
То есть, при объявлении объекта достаточно указать только имя свойства, а значение 
будет взято из переменной с аналогичным именем.

Дополни код объявления объекта так, чтобы у него были свойства name, price, image и 
tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис
 коротких свойств.*/

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
 
//  const product = {
//   name,
//   price,
//   image,
//   tags,

// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);

/*Задача  9
Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с 
именем, которое мы заранее не знаем, потому что оно хранится как значение 
переменной или как результат выполнения функции.

Раньше для этого необходимо было сначала создать объект, а потом добавлять 
свойства через квадратные скобки, что не совсем удобно.

const propName = "name";
const user = {
  age: 25
};

user[propName] = "Генри Сибола";
console.log(user.name); // "Генри Сибола"
Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода 
и в некоторых случаях упростить его. Значением вычисляемого свойства может быть любое 
валидное выражение.

const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user.name); // "Генри Сибола"
Дополни код объявления объекта credentials так, чтобы в результате у него были 
два свойства: email и password, имена которых хранятся в переменных emailInputName 
и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением 
свойства password - строка "jqueryismyjam".*/

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials.email);
// console.log(credentials.password);


/*Задача  10
ЦИКЛ FOR...IN
В отличии от массива или строки, объект - это не итерируемая сущность, то есть его 
нельзя перебрать циклами for или for...of. Для перебора объектов используется 
специальный цикл for...in, который перебирает ключи объекта object.

for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла. На каждой итерации в неё будет 
записано значение ключа (имя) свойства. Для того чтобы получить значение свойства 
с таким ключом (именем), используется синтаксис квадратных скобок.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}
Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи,
 а в массив values все значения его свойств.

Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная keys
Значение переменной keys это массив ["descr", "rating", "price"]
Объявлена переменная values
Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
 
//  for (const key in apartment) {
//    keys.push(key);
//    values.push(apartment[key]);
   
// }
// console.log(keys);
//  console.log(values);

/*Задача  11
Разберём концепцию собственных и несобственных свойств объекта и научимся правильно 
использовать цикл for...in.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4
Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом 
animal. Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, 
хотя его нет в объекте dog - это несобственное свойство из объекта animal.

Оператор in, который используется в цикле for...in, не делает различия между 
собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы
 всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в 
 объекте собственное свойство или нет, используется метод hasOwnProperty(key), который 
 возвращает true или false.

// ❌ Возвращает true для всех свойств
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на
 собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных
  свойств, это оградит от возможных ошибок в будущем.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Если это не собственное свойство - ничего не делаем
}
Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на
 собственное свойство.*/

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
  
// if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//   values.push(apartment[key]);
//   }

// }

// console.log(keys);
//  console.log(values);

/*Задача  12
ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ
Напиши функцию countProps(object), которая считает и возвращает 
количество собственных свойств объекта в параметре object. 
Используй переменную propCount для хранения количества свойств 
объекта.

Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps({ mail: "poly@mail.com", isOnline: true, 
score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта*/

// function countProps(object) {
//   let propCount = 0;

//   for (const count in object) {
//     if (object.hasOwnProperty(count)) {
//       propCount += 1;
//     }
//   }
//   console.log(propCount);
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


/*Задача  13
МЕТОД OBJECT.KEYS()
У встроенного класса Object есть несколько полезных методов для 
работы с объектами. Первый из них это Object.keys(obj), 
который принимает объект и возвращает массив ключей его 
собственных свойств. Если в объекте нет свойств, метод вернёт 
пустой массив.

const book = {
  title: "The Last Kingdom",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
Скомбинировав результат Object.keys() и цикл for...of можно удобно 
перебрать собственные свойства объекта, не прибегая к использованию 
архаического цикла for...in с проверками принадлежности свойств.

const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}
Мы перебираем массив ключей объекта и на каждой итерации получаем 
значение свойства с таким ключом.

Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

/*Задача  14*/

// function countProps(object) {
  
//   const keys = Object.keys(object);
  
//   console.log(keys.length);
// return keys.length
  
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

/*Задача  15*/

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// console.log(keys);
// const values = Object.values(apartment);
// console.log(values);


/*Задача  16*/

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const keys = Object.values(salaries);
  
//   for ( const key of keys) {
//     totalSalary += key;
//   }
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

/*Задача  17*/

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);

/*Задача  18*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
 
//   for (const product of products) {
    
//     if (productName === product.name) {
//       console.log(product.price);
//       return product.price;
//     }
    
//   }
//   console.log(null);
//   return null;
// }


// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

/*Задача  19*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//  let value =  [];
//    for (const product of products) {
//      if (product.hasOwnProperty(propName)) {
//        value.push(product[propName]);
//      }
//   }
//   console.log(value);
//    return value;
// }
 
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");


/*Задача  20*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//  let totalPrice = 0;

//  for ( const product of products) {

//    if  (productName === product.name) {
     
//      totalPrice = product.price * product.quantity;
//    }
//   }
//   console.log(totalPrice)
//  return totalPrice;
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

/*Задача  21*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow} = highTemperatures;


// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


/*Задача  22
Для того чтобы избежать присвоения undefined при деструктуризации 
несуществующих свойств, можно задать переменным значения по умолчанию, 
которые будут присвоены только в случае когда в объекте нет свойства с 
таким именем.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"
В прогнозе максимальных температур также может быть необязательное 
свойство icon - иконка погоды. Замени объявления переменных yesterday, 
today, tomorrow и icon одной операцией деструктуризации свойств объекта
 highTemperatures. Задай значение по умолчанию для icon - строку 
 "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;


// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(icon);

/*Задача  23
При деструктуризации можно изменить имя переменной в которую 
распаковывается значение свойства. Сначала пишем имя свойства из 
которого хотим получить значение, после чего ставим двоеточие и пишем 
имя переменной в которую необходимо поместить значение этого свойства.

const firstBook = {
  title: "Последнее королевство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Последнее королевство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480
Такая запись читается как «Создать переменную firstTitle, в которую 
поместить значение свойства title из объекта firstBook» и т. д.

Замени объявления переменных highYesterday, highToday, highTomorrow и 
highIcon одной операцией деструктуризации свойств объекта 
highTemperatures. Задай значение по умолчанию для highIcon - строку
 "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".*/

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon :highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;



// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//  console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(highIcon);

/*Задача  24
ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
При переборе массива объектов циклом for...of получаются множественные обращения к 
свойствам объекта.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
Для того, чтобы сократить количество повторений, можно деструктуризировать свойства 
объекта в локальные переменные в теле цикла.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте 
объявления переменной book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация 
объекта..*/

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];


// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

/*Задача  25*/

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today:
// {low: lowToday,
//   high: highToday,
//   icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
//   tomorrow:
//   {low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// console.log(lowToday);
// console.log(highToday);
// console.log(todayIcon);
// console.log(lowTomorrow);
// console.log(highTomorrow);
// console.log(tomorrowIcon);

/*Задача  26*/


// function calculateMeanTemperature(forecast) {
 
//  const {
//    today:
//    {low: todayLow,
//    high: todayHigh},
//     tomorrow:
//    {low: tomorrowLow,
//    high: tomorrowHigh}} = forecast;
 
//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 }
// });
// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 }
// });

/*Задача  27*/

// const scores = [89, 64, 42, 17, 93, 51, 26];


// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));

// console.log(bestScore);
// console.log(worstScore);


/*Задача  28*/

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];

// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


/*Задача  29*/

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);


/*Задача  30*/

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
  
//   console.log({
//     category: category,
//     priority: priority,
//     ...data,
//     completed: completed,
//   });
// return {
//     category: category,
//     priority: priority,
//     ...data,
//     completed: completed,
//   };
// }

// makeTask({});
// makeTask({
//   category: "Homemade", priority: "Low", text:
//     "Take out the trash"
// });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });


/*Задача  31*/


// function add(...args) {

// let sum = 0;
 
//  for (let arg of args) {
//    sum += arg
//   };
//   console.log(sum);
//  return sum;
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

/*Задача  32*/
 
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > firstNumber){ total += arg}
//   }

//   console.log(total);
//   return total;
  
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);


/*Задача  33*/

// function findMatches(numbers, ... args) {
//   const matches = []; // Don't change this line

// for (const number of args)
//   if (numbers.includes(number)) {
//     matches.push(number);
//     }
//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

/*Задача  34*/

// const bookShelf = {
  
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     console.log("Returning all books");
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     console.log(`Adding book ${bookName}`);
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     console.log(`Deleting book ${bookName}`);
// return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     console.log(`Updating book ${oldName} to ${newName}`);
// return `Updating book ${oldName} to ${newName}`
//   },
  
// }

// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");

/*Задача  35*/

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
  
//     const bookIndex = this.books.indexOf(oldName)
    
//   this.books.splice(bookIndex, 1, newName);
   

//   },
// };

/*Задача  36*/

// const atTheOldToad = {
 


//   potions: [],


  
// };

/*Задача  38*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
   

// this.potions.push(potionName);


//   },
// };


/*Задача  39*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//   const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1)
//   },
// };


/*Задача  40*/

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const toadIndex = this.potions.indexOf(oldName)
//         this.potions.splice(toadIndex, 1, newName);
//   },
// };


/*Задача  41*/

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         if (potionIndex === -1) {
//           return `Potion ${potionName} is not in inventory!`;
//         }
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
  
// };


// Отримати дані з API і вивести їх на сторінку
//https://reqres.in/
 
// fetch('https://reqres.in/api/users/2', {
//   method: 'PUT',
//   body: JSON.stringify(
//     {
//     "name": "morpheus",
//     "job": "zion resident"
// }
//   )
// })
//   .then(response => response.json())
//   .then(response => console.log(response));