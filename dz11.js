// Написати свою реалізацію функції isNaN

function myIsNan (input) {
    return !(input === null || input === Number(input) || input == Number(input));
}

let a = 'qwerty' / 10;

console.log("'qwerty' / 10 : " + isNaN(a) + ' vs ' + myIsNan(a)); // true
console.log("NaN : " + isNaN(NaN) + ' vs ' + myIsNan(NaN)); // true
console.log("'qwerty' : " + isNaN("qwerty") + ' vs ' + myIsNan("qwerty")); // true
console.log("undefined : " + isNaN(undefined) + ' vs ' + myIsNan(undefined)); //  true

console.log();
console.log("null : " + isNaN(null) + ' vs ' + myIsNan(null)); // Може бути перетворений в число, і його перетворене значення буде 0. Отже поверне false.
console.log("20 : " + isNaN(20) + ' vs ' + myIsNan(20)); //  Число 20 є дійсним числом, тому поверне false
console.log("'20' : " + isNaN("20") + ' vs ' + myIsNan("20")); // Рядок "20" може бути перетворений в число 20, тому поверне false