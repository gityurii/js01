/*У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.*/

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
        },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    ];

var pattern = /^[a-zA-Z0-9]+\.?[a-zA-Z0-9]+@(yahoo.com|gmail.com)$/;

for (let arrElement of arr) {
    if (pattern.test(arrElement.email) === true) {
        console.log(`${arrElement.email} is a VALID address`)
    }
    else {console.log(`${arrElement.email} is NOT a valid address`)}
}