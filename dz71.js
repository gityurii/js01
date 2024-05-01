/*
 Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію).
 Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
 Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.
*/

var car = {
    brand: "Volvo",
    model: "XC90",
    buildYear: 2023,
    getInfo: function() {
        for (let carKey in car) {
            if (typeof car[carKey] != 'function') {
                console.log(`${carKey} : ${car[carKey]}`);
            }
        }
    }
};
car.getInfo();
console.log();

car.color = 'Denim Blue';
car.getInfo();